
def fibonacci(n):
    if n <= 0:
        print("الرجاء إدخال رقم موجب.")
    elif n == 1:
        print("0")
    else:
        fib_list = [0, 1]
        for i in range(2, n):
            fib_list.append(fib_list[i-1] + fib_list[i-2])
        print(", ".join(map(str, fib_list)))

n = int(input("الرجاء إدخال عدد صحيح موجب: "))
fibonacci(n)


