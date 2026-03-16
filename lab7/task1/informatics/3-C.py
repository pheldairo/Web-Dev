import math

a = int(input())
b = int(input())

start = math.isqrt(a)
if start * start < a:
    start += 1

end = math.isqrt(b)

for i in range(start, end + 1):
    print(i * i)