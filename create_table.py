# from sqlalchemy import *
# from sqlalchemy.orm import mapper
# from sqlalchemy.orm import relationship
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.ext.declarative import declarative_base
# import datetime
# from sqlalchemy.orm import column_property
# engine = create_engine("sqlite:///test1.db", echo=True)
# metadata = MetaData()
#
# goods_table = Table('Goods', metadata,
#    Column('id', Integer, primary_key=true),
#    Column('name', String),
#    Column('barcode', Integer),
#    Column('grup', String)
#    )
# metadata.create_all(engine)
# class Goods(object):
#     def __init__(self, name, barcode, grup):
#         self.name = name
#         self.barcode = barcode
#         self.grup = grup
#         #id2 = relationship('GoodsForSale', uselist=False)
#
#     def __repr__(self):
#         return "<Good('%s','%s', '%s')>" % (self.name, self.barcode, self.grup)
#
#
# ForeignKey("Goods.id")
# goods_in_table1 = Table('Goods_in', metadata,
#    Column('id', Integer, primary_key=true ),
#    Column('id_good', Integer, ForeignKey("Goods.id")),
#    Column('price', Integer),
#    Column('quantity', Integer),
#    Column('date', DateTime, default=datetime.datetime.utcnow())
#    )
# class GoodsIn(object):
#     __tablename__ = 'Goods_in'
#     def __init__(self,id_good, price, quantity):
#         self.id_good = id_good
#         self.price = price
#         self.quantity = quantity
#     def __repr__(self):
#         return "<GoodIn('%s','%s', '%s')>" % (self.id_good, self.price, self.quantity)
#
#
#
# goods_in_realization_table1 = Table('Goods_in_realization', metadata,
#    Column('id', Integer, primary_key=true),
#    Column('good_id', ForeignKey("Goods.id")),
#    Column('id_good_id', ForeignKey("Goods_in.id")),
#    Column('quantity_real', Integer),
#    Column('date', DateTime, default=datetime.datetime.utcnow())
#    )
# class GoodsRealization(object):
#     __tablename__ = 'Goods_in_realization'
#     def __init__(self, good_id, id_good_id, quantity_real):
#         self.good_id = good_id
#         self.id_good_id = id_good_id
#         self.quantity_real = quantity_real
#         #self.temp = 3
#         #self. date = date
#
#     def __repr__(self):
#         return "<GoodRealization('%s', '%s', '%s')>" % ( self.good_id, self.id_good_id, self.quantity_real)
#
#
# contract_goods_table1 = Table('Contract_goods', metadata,
#    Column('id', Integer, primary_key=true),
#    Column('realiz_id', ForeignKey("Goods_in_realization.id")),
#    Column('date', DateTime, default=datetime.datetime.utcnow()),
#    Column('quantity_real', Integer),
#    Column('seller', Integer, ForeignKey("Users.id")),
#    )
# class GontractGoods(object):
#     __tablename__ = 'Goods_in'
#     def __init__(self,id, realiz_id, quantity_real, seller):
#         self.id = id
#         self.realiz_id = realiz_id
#         self.quantity_real = quantity_real
#         self.seller = seller
#     def __repr__(self):
#         return "<GoodIn('%s','%s', '%s', '%s' )>" % (self.id, self.realiz_id, self.quantity_real, self.seller)
#
# users_table = Table('Users', metadata,
#    Column('id', Integer, primary_key=true),
#    Column('name', String),
#    Column('password', String)
#    )
# class ShopAssistant(object):
#     __tablename__ = 'Users'
#     def __init__(self, name, password):
#         #self.id = id
#         self.name = name
#         self.password = password
#     def __repr__(self):
#         return "<GoodIn('%s','%s' )>" % ( self.name, self.password)
#
#
# purchase_orders = Table('Purchase_orders', metadata,
#     Column('id', Integer, primary_key=true),
#     Column('good_id', Integer, ForeignKey("Goods_in_realization.id")),
#     Column('quantity', Integer)
#     )
#
# class PurchaseOrders(object):
#     __tablename__ = 'Purchase_orders'
#
#     def __init__(self, id, good_id, quantity):
#         self.id = id
#         self.good_id = good_id
#         self.quantity = quantity
#
#     def __repr__(self):
#         return "<GoodIn('%s','%s', '%s')>" % (self.id, self.good_id, self.quantity)
#
# metadata.create_all(engine)
# print(mapper(GontractGoods, contract_goods_table1))
# print(mapper(ShopAssistant, users_table))
# print(mapper(PurchaseOrders, purchase_orders))
#
# print(mapper(Goods, goods_table))
# print(mapper(GoodsIn, goods_in_table1))
# print(mapper(GoodsRealization, goods_in_realization_table1))
#
#
#
# user_address_join = join(goods_table, goods_in_table1, goods_in_realization_table1)
# #table_oll = join(goods_table, goods_in_table1, goods_in_realization_table1)
# # print(table_oll.__dict__)
# # print(type(table_oll))
# Base = declarative_base()
#
#
# class GoodsQuantity(Base):
#     __table__ = user_address_join
#
#     id = column_property(goods_table.c.id, goods_in_table1.c.id_good)
#     address_id = goods_in_table1.c.id
#    # address2_id = goods_in_realization_table1.c.quantity_real
#     #this_quantity = GoodsRealization.quantity
# Session = sessionmaker(bind=engine)
# session = Session()
#
# #query1 = session.query(GoodsQuantity).filter_by(price=56).first()
#
# # query1 = session.query(Goods, GoodsIn, GoodsRealization).filter_by(name="shurup").first()
# # print(query1[0].name)
# # query2 = session.query(GoodsRealization).first()
# # print(query1[0])
# # #print("this !!!   ",query2.__dict__)
# # #t = join(query1, query2)
# # good = Goods("shurup", 4654, "222")
# # good2 = GoodsIn(1, 56, 5)
# # good3 = GoodsRealization(2, 4 )
# # session.add(good)
# # session.add(good2)
# # session.add(good3)
# # session.commit()
#
#
# #good4 = GoodsQuantity()
# # # print(good)
# # print("this print 1 ",good)
#
# # gayka22 = Goods("pena montagnaia", 2324235436, "balons")
# # #session.add(gayka22)
# # gayka22ForSale = GoodsForSale(8, 20, 5,)
# # session.add(gayka22ForSale)
# # query1 = session.query(GoodsQuantity).filter_by(name="shurup").first()
# # print()
# # print(query1.__dict__)
# #print("type ",type(query1[1]))
# #G1 = query1.__contains__
# #dict2 = dict()
# # for i in query1:
# #     print("this is i! ",i)
# #     dict2.update(i.__dict__)
# #     #print(query1[i])
#
# #print("this is dict2",dict2["name"])
# #print("Get Attribute! ",query1._asdict)
# #print(query1[1].price)
# #print(dir(query1))
# #d1= dict(query1)
# #print("this is dict! ",d1)
# #ourUser = session.query(Goods).filter_by(name="gayka").first()
# #qeryForsale = session.query(GoodsForSale).filter_by(name="gayka").first()
# #print(qeryForsale.id)
# #print(qeryForsale.id)
# #session.commit()
from dictalchemy import DictableModel
from sqlalchemy import *
from sqlalchemy.orm import mapper
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import or_
import datetime
from sqlalchemy.orm import column_property



engine = create_engine("sqlite:///test2.db", echo=True)
metadata = MetaData()
Base = declarative_base()
#make_class_dictable(Base)
class Goods(Base):    # таблица номенклатурі
    __tablename__ = "goods"
    id = Column(Integer, primary_key=true)
    name = Column(String)
    barcode = Column(Integer)
    grup = Column(String)

    incoming = relationship("Incoming", backref = "goods")

    def __init__(self, name, barcode):
        self.name = name
        self.barcode = barcode
    def __repr__(self):
        return "<Good('%s', '%s')>" % (self.name, self.barcode)

class Incoming(Base):     ## таблица входящего товара
    __tablename__ = "incoming"
    id = Column(Integer, primary_key=true)
    good_id = Column(Integer, ForeignKey(Goods.id))
    price = Column(Integer)
    quantity = Column(Integer)
    date = Column(DateTime)

    goodinrealiz = relationship("GoodInRealization", backref = "incoming")

    def __init__(self, good_id, price, quantity):
        self.good_id = good_id
        self.price = price
        self.quantity = quantity
    def __repr__ (self):
        return "<Incoming('%s', '%s')>" % (self.price, self.quantity)

class GoodInRealization(Base): #  таблица товара в продаже
    __tablename__ = "goodinrealization"
    id = Column(Integer, primary_key=true)
    incoming_id = Column(Integer, ForeignKey(Incoming.id))
    quantity_realization = Column(Integer)
    date = Column(DateTime)
    soldgoods = relationship("SoldGood", backref = "goodinrealization")

    def __init__(self, incoming_id, quantity_realization):
        self.incoming_id = incoming_id
        self.quantity_realization = quantity_realization

    def __repr__(self):
        return "<GoodInRealization( '%s')>" % ( self.quantity_realization)

class SellerUser(Base): # ТАБЛИЦА ПРОДАВЦОВ И ПОЛЬЗОВАТЕЛЕЙ
    __tablename__ = "users"
    id = Column(Integer, primary_key=true)
    name = Column(String)

    def __init__(self, name ):
        self.name = name

    def __repr__(self):
        return "<Seller( '%s')>" % (self.name)

class SoldGood(Base): #   ТАБЛИЦА ПРОДАНОГО ТОВАРА
    __tablename__ = "soldgood"
    id = Column(Integer, primary_key=true)
    goodrealized_id = Column(Integer, ForeignKey(GoodInRealization.id))
    date = Column(DateTime)
    soldquantity = Column(Integer)
    seller = Column(Integer, ForeignKey(SellerUser.id))

    def __init__(self, goodrealized_id, soldquantity, seller ):
        self.goodrealized_id = goodrealized_id
        self.soldquantity = soldquantity
        self.seller = seller

    def __repr__(self):
        return "<SoldGood( '%s')>" % (self.soldquantity)



class PurchaseOrder(Base):
    __tablename__ = "purchaseorder"
    id = Column(Integer, primary_key=true)
    quantity = Column(Integer)

    def __init__(self, quantity):
        self.quantity = quantity

    def __repr__(self):
        return "<Seller( '%s')>" % (self.quantity)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

#good1 = Goods("shurup 22/5 22inch", 1122)
#session.add(good1)
#good1.incoming.append(good1_incom)
#session.add(good1.incoming.append(good1_incom))
#add1 = session.query(Goods).filter(Goods.barcode == 1122).first()
#good1_incom = Incoming(add1.id,20,5)
#session.add(good1_incom)
#print(add1.incoming)
#print(add1.Incoming)
#!!!print(add1.incom)
#print(add1.Good)
#add1 = Goods("pena montagnaya 1L", 5555)
#session.add(add1)
#session.commit()
#add2 = Incoming(add1.id, 250, 20 )
#session.add(add2)
# as1 = Goods("otvertka 10 sm", 6666)
# as2 = Incoming(as1.id, 45, 7)
# session.add(as1, as2)
# session.commit()
# a = Goods("shup 1", 2255)
# b = Incoming(addresses= a , 44, 7)
# session.add(b)
# session.add(a)
# session.commit()
# db = session.query(Goods).filter(Goods.barcode ==5555).first()
# print(db.incoming[0].id)
# # bb = db.incoming
# # print(bb)
# db1 = GoodInRealization(db.incoming[0].id, 8)
# session.add(db1)


session.commit()






