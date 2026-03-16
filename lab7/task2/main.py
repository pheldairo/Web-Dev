from models import Drink, Coffee, Juice
drink1 = Drink("Water", 500, 1.5)
drink2 = Coffee("Latte", 300, 4.0, 120)
drink3 = Juice("Orange Juice", 250, 3.0, "orange")

drinks = [drink1, drink2, drink3]

for drink in drinks:
    print(drink)              
    print(drink.drink())      
    print(drink.get_price())
    print()

    
print(drink2.caffeine_info())
print(drink3.fruit_info())
