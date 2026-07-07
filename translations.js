/* ============================================================
   ARDA YILDIZ — PORTFOLIO · translations.js
   TR / EN i18n dictionary
   ============================================================ */

window.TRANSLATIONS = {

  en: {
    /* ── Nav ──────────────────────────────────────────── */
    'nav.education'   : 'Education',
    'nav.experience'  : 'Experience',
    'nav.projects'    : 'Projects',
    'nav.systems'     : 'Systems',
    'nav.contact'     : 'Contact',
    'nav.cv'          : 'CV ↗',

    /* ── Hero ─────────────────────────────────────────── */
    'hero.label'      : 'Computer Engineer · AI & Embedded Systems',
    'hero.tagline'    : 'Working on embedded systems, firmware development, and artificial intelligence applications.',
    'hero.scroll'     : 'scroll',

    /* ── Philosophy ───────────────────────────────────── */
    'phil.title'      : 'Engineering Philosophy',
    'phil.quote'      : 'I\'m a computer engineering student with a strong focus on embedded systems, IoT applications and AI integrations.',
    'phil.p1'         : 'I enjoy developing software that interacts with the real world - from firmware running on resource-constrained microcontrollers to web and mobile applications that control connected devices. My work mainly focuses on embedded systems, IoT communication and reliable device control.',
    'phil.p2'         : 'Alongside embedded development, I\'m also interested in artificial intelligence, especially computer vision, natural language processing and retrieval-based systems. I like understanding how systems work at a low level and turning that understanding into reliable, efficient and useful software.',
    'phil.tag1'       : 'Embedded Systems',
    'phil.tag2'       : 'IoT',
    'phil.tag3'       : 'AI Integrations',
    'phil.tag4'       : 'Edge AI',
    'phil.tag5'       : 'Computer Vision',
    'phil.tag6'       : 'Low-level Software',

    /* ── Education ────────────────────────────────────── */
    'edu.title'       : 'Education',
    'edu.1.period'    : 'Sep 2021 - June 2026',
    'edu.1.degree'    : 'B.Sc. Computer Engineering (60% Scholarship)',
    'edu.1.school'    : 'Çankaya University',
    'edu.1.cgpa'      : 'Graduation CGPA \u00a03.23 / 4.00',
    'edu.2.period'    : '2017 - 2021',
    'edu.2.degree'    : 'Ayhan Sümer High School',
    'edu.2.school'    : 'High School Diploma',

    /* ── Experience ───────────────────────────────────── */
    'exp.title'       : 'Experience',
    'exp.1.period'    : 'Feb 2026 - Present',
    'exp.1.company'   : 'NanoMagnetics Instruments',
    'exp.1.role'      : 'Candidate Engineer',
    'exp.1.note'      : 'Contributing to hardware-software integration and system communication with developing embedded and software solutions.',
    'exp.2.period'    : 'Mar 2024 - June 2026',
    'exp.2.company'   : 'Çankaya University - IT Department',
    'exp.2.role'      : 'Part-Time Student Developer',
    'exp.2.note'      : 'Designed and built Fleet Tracking System (ESP32 + SIM7600) and a Handheld RFID Card Reader for security guards. Both projects were assigned by the university\'s Board of Trustees.',
    'exp.3.period'    : 'Jun 2025 - Sep 2025',
    'exp.3.company'   : 'Digitest Savunma ve Havacılık A.Ş.',
    'exp.3.role'      : 'Long-Term Embedded Systems Intern',
    'exp.3.note'      : 'Designed FPGA systems in Vivado with custom IP cores and AXI communication. Built bare-metal/FreeRTOS embedded softwares, UART & TCP/IP pipelines and a PySide6 GUI for real-time YOLOv5 object detection.',
    'exp.4.period'    : 'Jul 2024 - Sep 2024',
    'exp.4.company'   : 'NanoMagnetics Instruments',
    'exp.4.role'      : 'Long-Term Software Intern',
    'exp.4.note'      : 'Built a mobile application using Flutter to control scientific devices via BLE. Also integrated Firebase Authentication and Firestore while optimizing performance by resolving memory leaks.',

    /* ── Projects ─────────────────────────────────────── */
    'work.title'          : 'Projects',
    'proj.stack'          : 'Stack',
    'proj.domain'         : 'Domain',

    'proj.1.title'    : 'Helma AI - Elderly Care Assistant',
    'proj.1.desc'     : 'A multimodal AI-powered mobile application for elderly care, combining emotion recognition across video, audio, and text with real-time monitoring, reminders, and caregiver-family interaction workflows.',
    'proj.1.domain'   : 'AI / Multimodal Systems',

    'proj.2.title'    : 'Fleet Tracking System for Çankaya University',
    'proj.2.desc'     : 'A live tracking system for the university\'s bus fleet. The device provides real-time location monitoring for students and staff, while an integrated RFID validator ensures that only registered members can access the transportation network.',
    'proj.2.domain'   : 'Embedded Systems · PCB Design (EasyEDA)',

    'proj.3.title'    : 'Handheld RFID Card Reader for Çankaya University',
    'proj.3.desc'     : 'A Wi-Fi-enabled handheld RFID validator terminal for security guards at the university\'s main gate. The device periodically syncs a local database for offline verification, logs scanned IDs locally, and batches reports back to the university servers.',
    'proj.3.domain'   : 'Embedded Systems',

    'proj.4.title'    : 'Turkish Legal Question Answering System',
    'proj.4.desc'     : 'An end-to-end RAG system for Turkish legal question answering. Includes embedding tuning, hybrid retrieval, reranking and LLM fine-tuning, designed to produce grounded, citation-consistent answers while minimizing hallucination. Evaluated with Recall@K, MRR, F1 and faithfulness.',
    'proj.4.domain'   : 'AI / NLP',

    'proj.5.title'    : 'TinyVoice - Keyword Spotting System',
    'proj.5.desc'     : 'An edge AI keyword spotting system optimized for microcontrollers. Trained and compared multiple deep learning models on the Google Speech Commands dataset. Prepared a DS-CNN model for deployment on ESP32 devices.',
    'proj.5.domain'   : 'Edge AI',

    'proj.6.title'    : 'Push or Perish',
    'proj.6.desc'     : 'A real-time reflex game. Built on the MSP430G2553 microcontroller using a 7-segment display, two buttons, and two LEDs. Written in Assembly language.',
    'proj.6.domain'   : 'Embedded Systems',

    'proj.7.title'    : 'Classroom Reservation System',
    'proj.7.desc'     : 'A full-stack web application for managing institutional classroom reservations. Used .NET environment and HTML/CSS/JavaScript on the frontend, with features like real-time availability tracking, conflict-resolution logic and multi-role access control for students, faculty and administrators.',
    'proj.7.domain'   : 'Backend Systems',

    'proj.8.title'    : 'VehiCrypto',
    'proj.8.desc'     : 'A blockchain-based vehicle maintenance tracking system. An immutable service history ledger built on Ethereum smart contracts. This system guarantees tamper-proof records across the full vehicle lifecycle, accessible to owners, mechanics and inspectors.',
    'proj.8.domain'   : 'Distributed Systems',

    'proj.9.title'    : 'Dungeon Of Pacemaker',
    'proj.9.desc'     : 'A game built for TeduJam, a university hackathon. Developed with a group of 4 under time constraints, focusing on rapid prototyping and core gameplay mechanics.',
    'proj.9.domain'   : 'Game Development',

    'proj.10.title'   : 'Realistic Horror Game',
    'proj.10.desc'    : 'A game project developed using Unreal Engine and C++. Focused on C++ Object Oriented Programming concepts.',
    'proj.10.domain'  : 'Real-time Systems',

    /* ── Systems ──────────────────────────────────────── */
    'sys.title'       : 'Technical Domains',
    'sys.col1'        : 'Programming Languages',
    'sys.col2'        : 'Embedded & Hardware',
    'sys.col3'        : 'AI & Systems',
    'sys.col4'        : 'Spoken Languages',
    'sys.lang1'       : 'Turkish (Native)',
    'sys.lang2'       : 'English (B2)',
    'sys.domains'     : 'Domains',
    'sys.tag1'        : 'IoT Systems',
    'sys.tag2'        : 'Edge AI',
    'sys.tag3'        : 'Embedded Systems',
    'sys.tag4'        : 'Computer Vision',
    'sys.tag5'        : 'NLP',
    'sys.tag6'        : 'RAG Pipelines',
    'sys.tag7'        : 'FPGA Design',
    'sys.tag8'        : 'Mobile Development',

    /* ── Links ────────────────────────────────────────── */
    'link.website'    : 'Website ↗',
    'link.github'     : 'GitHub ↗',
    'link.demo'       : 'Demo ↗',

    /* ── Contact ──────────────────────────────────────── */
    'contact.title'   : 'Contact:',
    'contact.location': 'Çankaya, Ankara',

    /* ── Footer ───────────────────────────────────────── */
    'footer.copy'     : '© 2026 Arda Yıldız',
    'footer.cv'       : 'Download CV ↗',
  },

  tr: {
    /* ── Nav ──────────────────────────────────────────── */
    'nav.education'   : 'Eğitim',
    'nav.experience'  : 'Deneyim',
    'nav.projects'    : 'Projeler',
    'nav.systems'     : 'Sistemler',
    'nav.contact'     : 'İletişim',
    'nav.cv'          : 'CV ↗',

    /* ── Hero ─────────────────────────────────────────── */
    'hero.label'      : 'Bilgisayar Mühendisi · YZ & Gömülü Sistemler',
    'hero.tagline'    : 'Gömülü sistemler, yazılım geliştirme ve yapay zeka uygulamaları üzerine çalışıyorum.',
    'hero.scroll'     : 'kaydır',

    /* ── Philosophy ───────────────────────────────────── */
    'phil.title'      : 'Mühendislik Felsefem',
    'phil.quote'      : 'Gömülü sistemler, IoT uygulamaları ve yapay zeka entegrasyonlarına odaklanan bir bilgisayar mühendisliği öğrencisiyim.',
    'phil.p1'         : 'Gerçek dünyayla etkileşim kuran yazılımlar geliştirmekten keyif alıyorum — kaynak kısıtlı mikrodenetleyicilerde çalışan firmware\'den bağlı cihazları kontrol eden web ve mobil uygulamalara kadar. Çalışmalarım ağırlıklı olarak gömülü sistemler, IoT haberleşmesi ve güvenilir cihaz kontrolü üzerine yoğunlaşmaktadır.',
    'phil.p2'         : 'Gömülü geliştirmenin yanı sıra, özellikle bilgisayarla görme, doğal dil işleme ve geri çağırmaya dayalı sistemler olmak üzere yapay zeka alanına da ilgi duyuyorum. Sistemlerin düşük seviyede nasıl çalıştığını anlamayı ve bu anlayışı güvenilir, verimli ve kullanışlı yazılımlara dönüştürmeyi seviyorum.',
    'phil.tag1'       : 'Gömülü Sistemler',
    'phil.tag2'       : 'IoT',
    'phil.tag3'       : 'YZ Entegrasyonları',
    'phil.tag4'       : 'Kenar Yapay Zeka',
    'phil.tag5'       : 'Bilgisayarla Görme',
    'phil.tag6'       : 'Düşük Seviyeli Yazılım',

    /* ── Education ────────────────────────────────────── */
    'edu.title'       : 'Eğitim',
    'edu.1.period'    : 'Eyl 2021 - Haz 2026',
    'edu.1.degree'    : 'Bilgisayar Mühendisliği Lisans (%60 Burslu)',
    'edu.1.school'    : 'Çankaya Üniversitesi',
    'edu.1.cgpa'      : 'Mezuniyet AGNO \u00a03,23 / 4,00',
    'edu.2.period'    : '2017 - 2021',
    'edu.2.degree'    : 'Ayhan Sümer Anadolu Lisesi',
    'edu.2.school'    : 'Lise Diploması',

    /* ── Experience ───────────────────────────────────── */
    'exp.title'       : 'Deneyim',
    'exp.1.period'    : 'Şub 2026 - Günümüz',
    'exp.1.company'   : 'NanoMagnetics Instruments',
    'exp.1.role'      : 'Aday Mühendis',
    'exp.1.note'      : 'Gömülü ve yazılım çözümleri geliştirerek donanım-yazılım entegrasyonuna ve sistem haberleşmesine katkı sağlıyorum.',
    'exp.2.period'    : 'Mar 2024 - Haz 2026',
    'exp.2.company'   : 'Çankaya Üniversitesi - BT Departmanı',
    'exp.2.role'      : 'Yarı Zamanlı Öğrenci Geliştirici',
    'exp.2.note'      : 'Filo Takip Sistemi (ESP32 + SIM7600) ve güvenlik görevlileri için El Tipi RFID Kart Okuyucu tasarlayıp geliştirdim. Her iki proje de üniversitenin Mütevelli Heyeti tarafından görevlendirildi.',
    'exp.3.period'    : 'Haz 2025 - Eyl 2025',
    'exp.3.company'   : 'Digitest Savunma ve Havacılık A.Ş.',
    'exp.3.role'      : 'Uzun Dönem Gömülü Sistemler Stajyeri',
    'exp.3.note'      : 'Vivado\'da özel IP çekirdekleri ve AXI haberleşmesiyle FPGA sistemleri tasarladım. Bare-metal/FreeRTOS gömülü yazılımlar, UART ve TCP/IP pipeline\'ları ve gerçek zamanlı YOLOv5 nesne tespiti için PySide6 GUI geliştirdim.',
    'exp.4.period'    : 'Tem 2024 - Eyl 2024',
    'exp.4.company'   : 'NanoMagnetics Instruments',
    'exp.4.role'      : 'Uzun Dönem Yazılım Stajyeri',
    'exp.4.note'      : 'BLE üzerinden bilimsel cihazları kontrol etmek için Flutter ile mobil uygulama geliştirdim. Firebase Authentication ve Firestore entegrasyonu yaparak bellek sızıntılarını gidererek performansı optimize ettim.',

    /* ── Projects ─────────────────────────────────────── */
    'work.title'          : 'Projeler',
    'proj.stack'          : 'Teknoloji',
    'proj.domain'         : 'Alan',

    'proj.1.title'    : 'Helma AI - Yaşlı Bakım Asistanı',
    'proj.1.desc'     : 'Yaşlı bakımı için video, ses ve metin üzerinden duygu tanımayı gerçek zamanlı izleme, hatırlatıcılar ve bakıcı-aile etkileşim iş akışlarıyla birleştiren çok modlu yapay zeka destekli bir mobil uygulama.',
    'proj.1.domain'   : 'YZ / Çok Modlu Sistemler',

    'proj.2.title'    : 'Çankaya Üniversitesi Filo Takip Sistemi',
    'proj.2.desc'     : 'Üniversitenin otobüs filosu için canlı takip sistemi. Cihaz öğrenciler ve personel için gerçek zamanlı konum izlemesi sağlarken, entegre RFID doğrulayıcı yalnızca kayıtlı üyelerin ulaşım ağına erişmesini garantiler.',
    'proj.2.domain'   : 'Gömülü Sistemler · PCB Tasarımı (EasyEDA)',

    'proj.3.title'    : 'Çankaya Üniversitesi El Tipi RFID Kart Okuyucu',
    'proj.3.desc'     : 'Üniversitenin ana kapısındaki güvenlik görevlileri için Wi-Fi özellikli el tipi RFID doğrulama terminali. Cihaz çevrimdışı doğrulama için yerel veritabanını periyodik olarak senkronize eder, taranan kimlikleri yerel olarak kaydeder ve raporları üniversite sunucularına toplu olarak iletir.',
    'proj.3.domain'   : 'Gömülü Sistemler',

    'proj.4.title'    : 'Türk Hukuku Soru-Cevap Sistemi',
    'proj.4.desc'     : 'Türk hukuku soru-cevaplama için uçtan uca bir RAG sistemi. Halüsinasyonu en aza indirirken kaynak tutarlı yanıtlar üretmek için embedding ayarlama, hibrit geri çağırma, yeniden sıralama ve LLM ince ayarını içerir. Recall@K, MRR, F1 ve faithfulness ile değerlendirilmiştir.',
    'proj.4.domain'   : 'YZ / Doğal Dil İşleme',

    'proj.5.title'    : 'TinyVoice - Anahtar Kelime Tespit Sistemi',
    'proj.5.desc'     : 'Mikrodenetleyiciler için optimize edilmiş kenar yapay zeka anahtar kelime tespit sistemi. Google Speech Commands veri setinde birden fazla derin öğrenme modeli eğitildi ve karşılaştırıldı. ESP32 cihazlarına dağıtım için DS-CNN modeli hazırlandı.',
    'proj.5.domain'   : 'Kenar Yapay Zeka',

    'proj.6.title'    : 'Push or Perish',
    'proj.6.desc'     : 'Gerçek zamanlı bir refleks oyunu. MSP430G2553 mikrodenetleyicisi üzerinde 7 segmentli ekran, iki buton ve iki LED kullanılarak geliştirildi. Assembly diliyle yazıldı.',
    'proj.6.domain'   : 'Gömülü Sistemler',

    'proj.7.title'    : 'Derslik Rezervasyon Sistemi',
    'proj.7.desc'     : 'Kurumsal derslik rezervasyonlarını yönetmek için tam yığın web uygulaması. .NET ortamı ve ön yüzde HTML/CSS/JavaScript kullanıldı; özellikler arasında gerçek zamanlı müsaitlik takibi, çakışma çözme mantığı ve öğrenciler, öğretim üyeleri ve yöneticiler için çok rollü erişim kontrolü yer alıyor.',
    'proj.7.domain'   : 'Backend Sistemleri',

    'proj.8.title'    : 'VehiCrypto',
    'proj.8.desc'     : 'Blockchain tabanlı araç bakım takip sistemi. Ethereum akıllı sözleşmeleri üzerine inşa edilmiş değiştirilemez servis geçmişi defteri. Bu sistem, araç sahipleri, mekanikler ve denetçiler tarafından erişilebilen tüm araç yaşam döngüsü boyunca kurcalanmaya karşı korumalı kayıtları garanti eder.',
    'proj.8.domain'   : 'Dağıtık Sistemler',

    'proj.9.title'    : 'Dungeon Of Pacemaker',
    'proj.9.desc'     : 'TeduJam üniversite hackathonu için geliştirilen bir oyun. Hızlı prototipleme ve temel oyun mekaniğine odaklanılarak zaman kısıtları altında 4 kişilik bir ekiple geliştirildi.',
    'proj.9.domain'   : 'Oyun Geliştirme',

    'proj.10.title'   : 'Gerçekçi Korku Oyunu',
    'proj.10.desc'    : 'Unreal Engine ve C++ kullanılarak geliştirilen bir oyun projesi. C++ Nesne Yönelimli Programlama kavramlarına odaklanıldı.',
    'proj.10.domain'  : 'Gerçek Zamanlı Sistemler',

    /* ── Systems ──────────────────────────────────────── */
    'sys.title'       : 'Teknik Alanlar',
    'sys.col1'        : 'Programlama Dilleri',
    'sys.col2'        : 'Gömülü & Donanım',
    'sys.col3'        : 'YZ & Sistemler',
    'sys.col4'        : 'Konuşulan Diller',
    'sys.lang1'       : 'Türkçe (Anadil)',
    'sys.lang2'       : 'İngilizce (B2)',
    'sys.domains'     : 'Uzmanlık Alanları',
    'sys.tag1'        : 'IoT Sistemleri',
    'sys.tag2'        : 'Kenar Yapay Zeka',
    'sys.tag3'        : 'Gömülü Sistemler',
    'sys.tag4'        : 'Bilgisayarla Görme',
    'sys.tag5'        : 'Doğal Dil İşleme',
    'sys.tag6'        : 'RAG Pipeline\'ları',
    'sys.tag7'        : 'FPGA Tasarımı',
    'sys.tag8'        : 'Mobil Geliştirme',

    /* ── Links ────────────────────────────────────────── */
    'link.website'    : 'Web Sitesi ↗',
    'link.github'     : 'GitHub ↗',
    'link.demo'       : 'Demo ↗',

    /* ── Contact ──────────────────────────────────────── */
    'contact.title'   : 'İletişim:',
    'contact.location': 'Çankaya, Ankara',

    /* ── Footer ───────────────────────────────────────── */
    'footer.copy'     : '© 2026 Arda Yıldız',
    'footer.cv'       : 'CV İndir ↗',
  }
};
