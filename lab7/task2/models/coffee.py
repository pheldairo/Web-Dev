class Coffee(Drink):
    def __init__(self, name, volume_ml, price, caffeine_mg):
        super().__init__(name, volume_ml, price)
        self.caffeine_mg = caffeine_mg

    def drink(self):
        return f"You enjoy the strong {self.name}!"

    def caffeine_info(self):
        return f"Caffeine: {self.caffeine_mg} mg"
