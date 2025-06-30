import pandas as pd
from pymongo import MongoClient

# Подключение к MongoDB (локально или Atlas)
client = MongoClient("mongodb://localhost:27017")  # или URI MongoDB Atlas
db = client["practice"]
collection = db["for_map"]

collection.delete_many({})

# Чтение CSV
df = pd.read_csv("map - map (1).csv")  # Убедись, что файл в том же каталоге

# Преобразование и загрузка
data = df.to_dict(orient="records")
collection.insert_many(data)



print("✅ Данные успешно загружены в MongoDB!")
