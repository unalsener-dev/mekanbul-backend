# 📌 mekanbul-backend

Bu repo **mekanbul-backend** uygulamasının basit Node.js + Express + Mongoose backend'idir. Uygulama, mekan (venue) verilerini MongoDB Cloud üzerinde tutar ve REST API üzerinden listeler, ekler, günceller ve siler.

---

## 🌍 Canlı API (Vercel)

[API'yi görmek için buraya tıkla](https://mekanbul-backend-zeta.vercel.app)

---

## 📖 Kısa Açıklama

- API, mekan (venue) verilerini yönetir: listeleme, ekleme, görüntüleme, güncelleme, silme.
- MongoDB Cloud kullanır.
- Bağlantı bilgisi `.env` dosyasındaki `MONGODB_URI` değişkeninden gelir.
- (Bakınız: `app_api/models/db.js`)

---

## 🚀 Kurulum

Projeyi klonladıktan sonra bağımlılıkları yükleyin:

```bash
cd /path/to/backend
npm install
```

`.env` dosyasını oluşturun ve MongoDB bağlantı bilgilerinizi ekleyin:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

---

## ▶️ Uygulamayı Çalıştırma

```bash
npm start
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

---

## 📚 API Endpoints

### Mekan İşlemleri

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/api/venues` | Tüm mekanları listele |
| `POST` | `/api/venues` | Yeni mekan ekle |
| `GET` | `/api/venues/:venueid` | Mekan detayını getir |
| `PUT` | `/api/venues/:venueid` | Mekan güncelle |
| `DELETE` | `/api/venues/:venueid` | Mekan sil |

### Yorum İşlemleri

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `POST` | `/api/venues/:venueid/comments` | Yorum ekle |
| `GET` | `/api/venues/:venueid/comments/:commentid` | Yorum getir |
| `PUT` | `/api/venues/:venueid/comments/:commentid` | Yorum güncelle |
| `DELETE` | `/api/venues/:venueid/comments/:commentid` | Yorum sil |

---

## 🧪 Postman Test Sonuçları

Aşağıda Postman ile alınmış test sonuçlarının ekran görüntüleri bulunmaktadır.

### Add Venue (POST)
![Add Venue](tests/Add_Venue.png)

### Add Comment (POST)
![Add Comment](tests/Add_Comment.png)

### List Nearly Venues (GET)
![List Nearly Venues](tests/List_Nearly_Venues.png)

### Get Venue (GET)
![Get Venue](tests/Get_Venue.png)

### Update Venue (PUT)
![Update Venue](tests/Update_Venue.png)

### Get Comment (GET)
![Get Comment](tests/Get_Comment.png)

### Update Comment (PUT)
![Update Comment](tests/Update_Comment.png)

### Delete Comment (DELETE)
![Delete Comment](tests/Delete_Comment.png)

### Delete Venue (DELETE)
![Delete Venue](tests/Delete_Venue.png)

---

## 📁 Postman Koleksiyonu

Tüm API istekleri aşağıdaki koleksiyon içine eklenmiştir:

```
unal-mekanbul-api.postman_collection.json
```

Bu dosya proje klasörünün içindedir ve Postman'e **Import** edilerek kullanılabilir.

---

## 📂 Proje Klasör Yapısı

Hocanın slaytındaki yapıya uygundur:

```
BACKEND/
├── app_api/
│   ├── controllers/
│   │   ├── CommentController.js
│   │   └── VenueController.js
│   ├── models/
│   │   ├── db.js
│   │   └── venue.js
│   └── routes/
│       └── index.js
├── bin/
├── node_modules/
├── public/
├── routes/
├── tests/
│   ├── Add_Comment.png
│   ├── Add_Venue.png
│   ├── Delete_Comment.png
│   ├── Delete_Venue.png
│   ├── Get_Comment.png
│   ├── Get_Venue.png
│   ├── List_Nearly_Venues.png
│   ├── Update_Comment.png
│   └── Update_Venue.png
├── .gitignore
├── app.js
├── insert.mongodb
├── package-lock.json
├── package.json
├── README.md
├── unal-mekanbul-api.postman_collection.json
└── update.mongodb
```

---

## 🛠️ Kullanılan Teknolojiler

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL veritabanı
- **Mongoose** - MongoDB ODM
- **Vercel** - Deployment platformu