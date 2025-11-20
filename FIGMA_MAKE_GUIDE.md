# Figma Make - DNSEye-Library Prototip Kılavuzu

## 📋 İçindekiler

1. [Başlangıç](#başlangıç)
2. [Figma Make Setup](#figma-make-setup)
3. [DNSEye-Library Komponentleri](#dnseye-library-komponentleri)
4. [Prototip Oluşturma](#prototip-oluşturma)
5. [GitHub ile Senkronizasyon](#github-ile-senkronizasyon)

---

## Başlangıç

### Gereklilikler

- Figma hesabı (Pro veya üzeri)
- Figma Make erişimi
- DNSEye-Library dosyasına erişim: https://www.figma.com/design/GQpuM432S0CLzEhrvob1kT/DNSEye-Library--Copy-
- GitHub hesabı (dns-sense-design-library repository)

### Kurulum

```bash
# Repository'yi clone edin
git clone https://github.com/dnssense/dns-sense-design-library.git
cd dns-sense-design-library

# Dependencies yükleyin
npm install

# Figma token'ınızı ekleyin (isteğe bağlı)
echo "FIGMA_TOKEN=your_token_here" > .env.local
```

---

## Figma Make Setup

### 1. Figma Make'e Gidin

1. **Figma.com** sitesine gidin
2. Sol menüden **Make** seçeneğini tıklayın
3. "Create with AI" tuşuna basın

### 2. Prompt Yazın

**DNS Management Dashboard Prototipi için örnek prompt:**

```
Create a professional DNS management dashboard UI with:
- Dark/light mode support
- Left sidebar with navigation menu
- Header with logo and user profile
- Main content area with data table showing DNS records
  (Domain, Type, TTL, Value, Status columns)
- Filter panel for domain status
- Add/Edit/Delete DNS record buttons
- Use DNS Sense color scheme (navy blue, green accents)
- Include helper notifications for success/error states
```

### 3. Özelleştirin

Make tarafından oluşturulan prototip üzerinde:

1. **Komponentleri DNSEye-Library'den seçin**
   - Buttons → Button component
   - Inputs → Input/Select components
   - Table → Table component
   - Notifications → Alert/Badge components

2. **Design Tokens Uygulayın**
   ```
   Renkler:
   - Primary: #001F3F (Navy Blue)
   - Success: #00CC66 (Green)
   - Error: #FF4444 (Red)
   - Background: #F5F5F5
   
   Typography:
   - Headers: Header-1, Header-2
   - Body: Body-14, Body-12
   - Buttons: Button-12
   ```

3. **Spacing Uyumlandırın**
   - Padding: 16px, 24px, 32px
   - Gap: 12px, 16px, 24px

---

## DNSEye-Library Komponentleri

### Mevcut Komponentler

#### Form Komponentleri
- **Input** - Text input fields
- **Select** - Dropdown menus
- **Checkbox** - Multiple selection
- **Radio** - Single selection
- **Toggle** - On/off switch
- **TextArea** - Multiline text

#### Tablo Komponentleri
- **Table** - Data grid
- **TableHeader** - Column headers
- **TableRow** - Row component
- **TableCell** - Cell component

#### Filtre Komponentleri
- **FilterButton** - Action button
- **FilterDropdown** - Filter options
- **FilterChip** - Selected filter tag

#### Navigasyon Komponentleri
- **Navbar** - Top navigation
- **Sidebar** - Side menu
- **Breadcrumb** - Path navigation
- **Tabs** - Tab navigation

#### Yardımcı Komponentler
- **Alert** - Notification boxes
- **Badge** - Status indicators
- **Tooltip** - Hover information
- **Popover** - Additional content

#### Diğer Komponentler
- **Button** - Action buttons
- **Link** - Navigation links
- **Card** - Content containers
- **Modal** - Dialog boxes

---

## Prototip Oluşturma

### Adım 1: Layout Oluşturun

```figma
┌─────────────────────────────────────────┐
│ Navbar (DNS Sense Logo + User Menu)     │
├──────────────┬──────────────────────────┤
│              │                          │
│   Sidebar    │    Main Content          │
│   (Menu)     │    (Dashboard)           │
│              │                          │
│   - Home     │  📊 DNS Records Table    │
│   - Domains  │  📋 Filters Panel       │
│   - Reports  │  ⚙️ Settings            │
│   - Settings │                          │
│              │                          │
└──────────────┴──────────────────────────┘
```

### Adım 2: Tabel Ayarlayın

DNSEye-Library **Table component**'ini kullanarak:

```typescript
// Tablo yapısı
columns: [
  { id: 'domain', label: 'Domain', width: 200 },
  { id: 'type', label: 'Type', width: 100 },
  { id: 'ttl', label: 'TTL', width: 80 },
  { id: 'value', label: 'Value', width: 300 },
  { id: 'status', label: 'Status', width: 100 }
]

data: [
  { domain: 'example.com', type: 'A', ttl: 3600, value: '192.168.1.1', status: 'Active' },
  { domain: 'mail.example.com', type: 'MX', ttl: 3600, value: 'mail.example.com', status: 'Active' },
  // ...
]
```

### Adım 3: Filtreler Ekleyin

**FilterButton** ve **FilterDropdown** komponentlerini kullanarak:

```figma
┌─ Filters
├─ Status: [Active ▼] [Inactive ▼]
├─ Type: [A ▼] [MX ▼] [CNAME ▼]
├─ [Apply] [Reset]
```

### Adım 4: İnteraktivite Ekleyin

Figma Make'te **interactions** ekleyin:

- **Butonlar**
  - "Add Record" → Modal açılır
  - "Edit" → Record düzenleme formu
  - "Delete" → Confirmation dialog

- **Filtreler**
  - Status dropdown → Tabloyu filtreler
  - Arama → Sonuçları günceller

- **Navigasyon**
  - Sidebar menüsü → Farklı sayfalar
  - Breadcrumb → Geri gitme

---

## GitHub ile Senkronizasyon

### Adım 1: Figma Token Alın

1. Figma.com → Settings → Developer
2. "Create a new personal access token" tıklayın
3. Token'ı kopyalayın

### Adım 2: Environment Setup

```bash
# .env.local dosyası oluşturun
echo "FIGMA_FILE_ID=GQpuM432S0CLzEhrvob1kT" > .env.local
echo "FIGMA_TOKEN=your_token" >> .env.local
```

### Adım 3: Otomatik Senkronizasyon

```bash
# GitHub Actions workflow'u çalıştırın
git push origin

# Veya manuel olarak:
npm run sync:figma
```

### Adım 4: React Komponentleri Oluşturun

Figma'dan dışa aktarılan tasarımlardan React komponentleri oluşturun:

```typescript
// src/components/DNSDashboard/DNSDashboard.tsx
import React from 'react';
import { Navbar, Sidebar, Table, Button, Modal, Input } from '@dnssense/design-library';

const DNSDashboard: React.FC = () => {
  const [records, setRecords] = React.useState([]);
  const [filters, setFilters] = React.useState({});
  const [showAddModal, setShowAddModal] = React.useState(false);

  return (
    <div className="dashboard-layout">
      <Navbar logo="DNS Sense" />
      <div className="dashboard-container">
        <Sidebar items={[
          { label: 'Home', icon: 'home' },
          { label: 'Domains', icon: 'globe' },
          { label: 'Reports', icon: 'chart' },
          { label: 'Settings', icon: 'gear' }
        ]} />
        <main className="dashboard-main">
          <div className="filters">
            <Input placeholder="Search domains..." />
            <Button onClick={() => setShowAddModal(true)}>+ Add Record</Button>
          </div>
          <Table columns={tableColumns} data={filteredRecords(records, filters)} />
        </main>
      </div>
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <AddRecordForm onSubmit={(record) => {
          setRecords([...records, record]);
          setShowAddModal(false);
        }} />
      </Modal>
    </div>
  );
};

export default DNSDashboard;
```

---

## Best Practices

✅ **DOs**
- DNSEye-Library komponentlerini kullanın
- Design tokens'ları tutarlı tutun
- Responsive design yapın
- Accessibility göz önünde bulundurun
- Prototipinizi GitHub'da dokumente edin

❌ **DON'Ts**
- Bileşenleri modify etmeyin
- Renkler ve spacing'i değiştirmeyin
- Hard-coded değerler kullanmayın
- Design tokenları bypass etmeyin

---

## Sorun Giderme

### Soru: Figma Make'te komponent yüklenmiyor
**Çözüm:** Figma dosyasının publish edildiğinden emin olun ve URL doğru olduğunu kontrol edin

### Soru: GitHub Actions sync başarısız oluyor
**Çözüm:** FIGMA_TOKEN'ın geçerli olduğundan emin olun ve permissions kontrol edin

### Soru: React komponentleri build edilmiyor
**Çözüm:** Tüm imports'lar doğru olduğundan emin olun ve `npm install` çalıştırın

---

## Kaynaklar

- [Figma Make Docs](https://www.figma.com/make)
- [DNSEye-Library Figma File](https://www.figma.com/design/GQpuM432S0CLzEhrvob1kT/DNSEye-Library--Copy-)
- [DNS Sense Design Library GitHub](https://github.com/dnssense/dns-sense-design-library)

---

## İletişim

Soruları veya önerileri için: [GitHub Issues](https://github.com/dnssense/dns-sense-design-library/issues)
