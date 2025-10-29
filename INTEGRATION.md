# 🔗 Integrasi Frontend-Backend-ML

## ✅ Status Integrasi
- ✅ **Frontend**: Vue.js berjalan di `http://localhost:5173/`
- ✅ **Backend**: PHP API berjalan di `http://localhost:8000/`
- ✅ **ML**: Python scripts terintegrasi dengan backend
- ✅ **API Service**: TypeScript service untuk komunikasi
- ✅ **Real-time Data**: Data dari backend langsung ditampilkan di frontend

## 🚀 Cara Menjalankan Lengkap

### 1. Backend API
```bash
cd backend/public
php -S localhost:8000
```

### 2. Frontend Vue.js
```bash
cd frontend
npm run dev
```

### 3. ML Environment (Optional - sudah terintegrasi via backend)
```bash
cd ml
source ../.venv/bin/activate  # atau menggunakan path lengkap
python PBKK_script_api.py sample_text.txt
```

## 🔄 Alur Integrasi

### Upload File:
1. **Frontend** → User upload file via drag&drop/click
2. **Frontend** → Kirim file ke `POST /api.php` via FormData
3. **Backend** → Process file, panggil Gemini API untuk sentiment
4. **Backend** → Hitung readability score (Flesch Reading Ease)
5. **Backend** → Return JSON result
6. **Frontend** → Simpan di localStorage, redirect ke hasil

### Input Teks:
1. **Frontend** → User paste/ketik teks langsung
2. **Frontend** → Kirim JSON `{text: "..."}`ke `POST /api.php`
3. **Backend** → Process langsung, sama seperti file
4. **Backend** → Return hasil analisis
5. **Frontend** → Display hasil real-time

## 📊 Format Data Response

```json
{
    "success": true,
    "text": "Teks yang dianalisis...",
    "sentiment": "Positive/Negative/Neutral",
    "sentiment_score": 0.75,
    "sentiment_details": "Penjelasan lengkap dari Gemini AI...",
    "readability": 65.5,
    "readability_category": "Standar",
    "word_count": 104,
    "sentence_count": 9
}
```

## 🎯 Fitur yang Terintegrasi

### ✅ Analisis Sentiment
- **API**: Google Gemini 2.0 Flash
- **Input**: Teks/File (TXT, HTML)
- **Output**: Sentiment label + skor + penjelasan detail

### ✅ Analisis Readability  
- **Algorithm**: Flesch Reading Ease
- **Input**: Sama dengan sentiment
- **Output**: Skor keterbacaan + kategori + statistik

### ✅ Multi Input Support
- **File Upload**: Drag & drop, click to browse
- **Text Input**: Paste langsung dari clipboard
- **URL Input**: Analisis konten dari URL

### ✅ Real-time UI Updates
- **Loading States**: Overlay saat processing
- **Backend Status**: Indicator online/offline
- **Error Handling**: User-friendly error messages
- **Data Persistence**: LocalStorage untuk hasil analisis

## 🛠️ Komponen yang Diupdate

### Frontend Components:
1. **Home.vue** - Handle semua jenis upload/input
2. **Readability.vue** - Display data real dari backend
3. **Sentiment.vue** - Display sentiment analysis results
4. **BackendStatus.vue** - Monitor koneksi backend
5. **ApiService.ts** - Service layer untuk API calls

### Backend Integration:
1. **api.php** - Endpoint utama yang sudah ada
2. **CORS Headers** - Sudah dikonfigurasi untuk frontend
3. **File Upload Handler** - Support multi format
4. **Gemini API Integration** - Sudah terintegrasi

## 🔧 Configuration

### API Keys (ml/.env):
```env
API_KEY_GEMINI=your-gemini-key
API_KEY_DEEPSEEK=your-deepseek-key  
API_KEY_OCR=your-ocr-key
API_KEY_BERT=your-huggingface-key
```

### Frontend API Base URL:
```typescript
const API_BASE_URL = 'http://localhost:8000'
```

## 🧪 Testing

### Manual Test:
1. Buka `http://localhost:5173/`
2. Upload file atau paste teks
3. Lihat hasil di halaman Readability & Sentiment
4. Check browser console untuk logs

### API Test:
```bash
# Test text analysis
curl -X POST http://localhost:8000/api.php \
  -H "Content-Type: application/json" \
  -d '{"text":"Ini adalah berita positif tentang kemajuan teknologi."}'

# Test file upload
curl -X POST http://localhost:8000/api.php \
  -F "file=@sample.txt"
```

## 🐛 Troubleshooting

### Backend Offline:
- Check apakah PHP server jalan: `php -S localhost:8000`
- Cek port 8000 tidak bentrok dengan aplikasi lain

### CORS Issues:
- Backend sudah include CORS headers
- Pastikan request dari `localhost:5173` ke `localhost:8000`

### API Key Issues:
- Check file `ml/.env` ada dan valid
- Restart PHP server setelah ubah API key

### Data Tidak Muncul:
- Check browser console untuk error
- Clear localStorage: `localStorage.clear()`
- Check Network tab di DevTools

## 📈 Performance Notes

- **Gemini API**: Response time ~2-5 detik
- **File Processing**: Instant untuk file < 1MB
- **Readability**: Calculated real-time
- **UI Updates**: Reactive berdasarkan localStorage

---

## 🎉 Hasil Integrasi

✅ **Tidak ada lagi data dummy**  
✅ **Real-time analysis dari Gemini AI**  
✅ **File upload & text input working**  
✅ **Error handling & loading states**  
✅ **Backend status monitoring**  
✅ **Responsive UI dengan data asli**

Frontend sekarang 100% terintegrasi dengan backend dan ML pipeline!
