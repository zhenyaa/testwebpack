
#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vi:ts=4:et
import certifi
import pycurl

try:
    from io import BytesIO
except ImportError:
    from StringIO import StringIO as BytesIO


def reqest1(barcode=""):
    url = "https://barcodes.olegon.ru/api/card/name/"
    ID = "/B800400832567064278077480108110"
    #barcode= "4791045003380"
    buffer = BytesIO()
    c = pycurl.Curl()
    c.setopt(pycurl.CAINFO, certifi.where())
    c.setopt(c.URL, url + barcode + ID)
    c.setopt(c.WRITEDATA, buffer)
    c.perform()
    c.close()
    body = buffer.getvalue()
    print("this pered decodir ",body)
    body2 = body.decode('utf-8')
    #print("1 ", body2)
    # print('2 ', type(body2), "body2")
    # print('3 ', type(body), "body")
    # print('4 ', body2[1])
    # print('5 ', body2[24:-3])
    return body2