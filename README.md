# 📍 Mekanbul Backend

Bu proje, **Web Teknolojileri ve Programlama** dersi kapsamında geliştirilmiş; mekanları listeleyen, detaylarını sunan ve yorum altyapısını sağlayan bir **RESTful API** sunucusudur.

Proje, veritabanı olarak **MongoDB Atlas (Cloud)** kullanmaktadır ve veriler bulutta tutulmaktadır.

## 🚀 Kullanılan Teknolojiler

* **Node.js**: Sunucu tarafı çalışma ortamı
* **Express.js**: Web uygulama çatısı
* **MongoDB Atlas**: Bulut tabanlı NoSQL veritabanı
* **Mongoose**: MongoDB için nesne modelleme aracı

---

## 🛠️ Kurulum ve Çalıştırma Adımları

Bu projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/unalsener-dev/mekanbul-backend.git
cd mekanbul-backend
```

### 2. Bağımlılıkları Yükleyin

Proje dosyalarında `node_modules` klasörü bulunmamaktadır (`.gitignore` ile engellenmiştir). Gerekli paketleri yüklemek için terminalde şu komutu çalıştırın:
```bash
npm install
```

### 3. Uygulamayı Başlatın

Veritabanı bağlantı ayarları `app_api/models/db.js` dosyasında yapılandırılmıştır ve doğrudan çalışmaya hazırdır.
```bash
npm start
```

Veya `nodemon` yüklü ise:
```bash
nodemon
```

Terminalde şu çıktıyı gördüğünüzde bağlantı başarılıdır:
```
"Mongoose ... adresindeki veritabanına bağlandı"
```
