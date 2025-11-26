📍 Mekanbul Backend Projesi

Bu proje, Web Teknolojileri ve Programlama dersi kapsamında geliştirilmiş; mekanları listeleyen, detaylarını sunan ve yorum altyapısını sağlayan bir RESTful API sunucusudur.
Veritabanı olarak MongoDB Atlas (Cloud) kullanılmakta olup, veriler bulutta tutulmaktadır.

🚀 Kullanılan Teknolojiler

Node.js – Sunucu çalışma ortamı

Express.js – Web uygulama çatısı

MongoDB Atlas – Bulut tabanlı NoSQL veritabanı

Mongoose – MongoDB için nesne modelleme aracı

🛠️ Kurulum ve Çalıştırma
1. Projeyi Klonlayın

git clone https://github.com/unalsener-dev/mekanbul-backend.git
cd mekanbul-backend

2. Bağımlılıkları Yükleyin

npm install

3. Uygulamayı Başlatın

npm start
veya nodemon kullanıyorsanız:
nodemon

Başarılı bağlantıda terminal şuna benzer bir çıktı verir:
"Mongoose ... adresindeki veritabanına bağlandı"

📂 Veritabanı Scriptleri (MongoDB Playground)

Proje ana dizinindeki .mongodb dosyaları, VS Code MongoDB Extension ile çalıştırılarak veritabanı yönetilebilir:

insert.mongodb → Koleksiyonu temizler ve 6 örnek mekanı yeniden oluşturur

update.mongodb → Var olan mekanlara örnek yorumlar ekler

🔗 API Rotaları

GET /api/venues → Tüm mekanları listeler

GET /api/venues/:venueid → Belirli mekanın detaylarını getirir

POST /api/venues/:venueid/comments → Mekana yorum ekler
