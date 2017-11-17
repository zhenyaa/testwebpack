from flask import Flask
from flask import render_template
from flask import jsonify
from decode_can_code import reqest1
import os
import json
from flask import request
from create_table import *
# from flask.ext.sq
from sqlalchemy import *
from sqlalchemy.orm import mapper
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import datetime
from sqlalchemy.orm import column_property

app = Flask(__name__, static_url_path="", static_folder='static')
app._static_folder = os.path.abspath("static")
#app._static_folder = 'static'


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/login', methods=['GET', 'POST'])
def login():
    # print('hello ', name)
    return render_template("login.html")


@app.route('/sell/')
def sell():
    return render_template("sell_page.html")


@app.route('/additem/', methods=['GET', 'POST'])
# @app.route('/additem/<barcode>/')
def additem():
    # if request.args.get('barcode', None):
    if request.method == 'GET':
        data = request.args.get('barcode')
        return render_template("add_t.html", barcode=data)
    elif request.method == 'POST':
        barc_post = request.form['barcode']
        name_item = request.form['name']
        amount = request.form['amount']
        print(barc_post, amount, name_item)
        return "ECHO: POST\n"
    else:
        return render_template("add_t.html")


@app.route('/admin/')
def admin():
    return render_template("base.html")


test5 = [
    {
        "id": 7,
        "name": "0",
        "price": 100500,
        "quantity": 1,
        "total_amount": 6
    },
    {
        "id": 6,
        "name": "1",
        "price": 4,
        "quantity": 1,
        "total_amount": 6
    },
    {
        "id": 5,
        "name": "2",
        "price": 142,
        "quantity": 1,
        "total_amount": 6
    },
    {
        "id": 339,
        "name": "3",
        "price": 1,
        "quantity": 2,
        "total_amount": 10
    }
]

text = '{"canApprove": true,"hasDisplayed": false}'


@app.route('/getbarcode/', methods=['GET', 'POST'])   ###!!!!  запросы на поиск товара для продажи, !!!!
def getBarcode():
    if request.method == 'GET':
        if "barcode" in request.args:
            data = request.args.get('barcode')

            NameOrBarcode = session.query(GoodInRealization, Goods).filter(or_(GoodInRealization.id== data, Goods.barcode == data, Goods.name.like("%" + data + "%") )).all()
            #NameOrBarcode = session.query(GoodInRealization, Goods ).filter((GoodInRealization.id== data) | (Goods.barcode == data)  | (Goods.name.like("%" + data + "%"))).all()
            print(" its oll return!! ", NameOrBarcode)
            for i in NameOrBarcode:
                print("its for ! ",i[0].id)
            a = [{
                "id": NameOrBarcode[1][0].id,
                "name": NameOrBarcode[1][1].name,
                "price": 100,
                "quantity": NameOrBarcode[1][0].quantity_realization,
                "total_amount": NameOrBarcode[1][0].quantity_realization
            }]
            print(a)
            return jsonify(a[0])
    elif request.method == 'POST':
        print("its mass", request.get_json(force=True))
        return "xyz", 200



        # if "collection[0][price]" in request.args:
        #     print(request.args.get("2"))
        #     return "xyz", 200
        # data = request.args.get('barcode')
        # print(test5[int(data)])
        # #return render_template("add_t.html", barcode=data)
        # return jsonify(test5[int(data)])
def dict_from_class(cls):
     return dict(
         (key, value)
         for (key, value) in cls.__dict__.items()
         if key not in _excluded_keys
         )
@app.route('/findbarcode/', methods=['GET', 'POST'])
def findBarcode():
    if request.method == 'GET':
        if "barcode" in request.args:
            data = request.args.get('barcode')

            query1 = session.query(Goods).filter((Goods.name.like("%" + data + "%")) | (Goods.barcode == (data)) | (Goods.id == (data))).all()
            #print(dict(query1))
            if not query1 :
                reqest = reqest1(data) #////zapros na sayt rozkomentit!!!!!!!!!!!!!!!!!!!
                da = json.loads(reqest)
                #print(da['names'][0])#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if da['status'] == 404:
                    print("not found")
                    return "xyz", 404
                newGood = Goods(da['names'][0],data)
                session.add(newGood)
                b = newGood.__dict__
                c = dict(b)
                del c["_sa_instance_state"]
                session.commit()
                d={}
                d[1] = c
                return jsonify(d)
            else:
                print("find in the base ", query1)
            print("this is test analized!!!!! ", query1)
            c = query1[0].__dict__
            print (c)
            print(type(query1[0]))
            i=0
            d= {}
            for key in query1:
                
                print ("key  ",key)
                print(type(key))
                i=i+1
                print(i)
                key.__delattr__("_sa_instance_state")
                d[i] = key.__dict__
            print(d)    
            #reqest = reqest1(data) ////zapros na sayt rozkomentit!!!!!!!!!!!!!!!!!!!
            #otvet = {"status":200,"names":["СИГАРЕТЫ KENT 4 (СМОЛ 4МГ\/С)"]}
            #print(reqest)
            #print("this json",jsonify(reqest))
            
            # print("convert!!!",my_dict)
            # print(type(my_dict))
            # #print("111111111", my_dict[0])
            # print("222222222222",my_dict)
            
            #print("dir    !!!!!!!!!!!!",query1.__dir__)
           # print("dict                ",query1.__dict__)
            #print(query1.__list__)
            #query2 = query1.__slots__
            print((jsonify(d)))
            return jsonify(d)
    elif request.method == 'POST':
        print("its mass", request.get_json(force=True))
        return "xyz", 200    


if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)
