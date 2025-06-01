a=15
def fun():
    a=10
    global a
    a=15
    y=a
fun()
print(a)
