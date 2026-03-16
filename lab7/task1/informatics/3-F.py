x = input().strip()
x = x[::-1].lstrip('0')
print(x if x else 0)