
#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vi:ts=4:et
import certifi
import pycurl
try:
    from io import BytesIO
except ImportError:
    from StringIO import StringIO as BytesIO
def reqest1(barcode):
	url = "https://barcodes.olegon.ru/api/card/name/"
	#barcode= "48209984"
	buffer = BytesIO()
	c = pycurl.Curl()
	c.setopt(pycurl.CAINFO, certifi.where())
	c.setopt(c.URL, url+barcode)
	c.setopt(c.WRITEDATA, buffer)
	# For older PycURL versions:
	#c.setopt(c.WRITEFUNCTION, buffer.write)
	c.perform()
	c.close()
	body = buffer.getvalue()
	#print(body)
	# Body is a string on Python 2 and a byte string on Python 3.
	# If we know the encoding, we can always decode the body and
	# end up with a Unicode string.
	body2 = body.decode('utf-8')
	#print(body.decode('utf-8'))
	print("1 ",body2)
	print('2 ',type(body2), "body2")
	print('3 ',type(body), "body")
	print('4 ',body2[1])
	print('5 ',body2[24:-3])
	return [body2[24:-3]]