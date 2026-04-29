import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Phone, MessageSquare, Mail, MapPin, Instagram, Facebook, ShieldCheck, Clock, Wrench, CircleCheck, ChevronRight, CircleHelp, Menu, X, ArrowLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const brands = [
  { 
    id: "vaillant",
    name: "Vaillant", 
    img: "/vaillant-logo-272x72-1888261.png", 
    color: "#008f7a",
    models: "EcoTEC Intro, EcoTEC Plus, VUW TR Serisi, TurboMAG",
    info: "Alman teknolojisi ile üretilen Vaillant kombiler, yüksek enerji verimliliği ve uzun ömürlü kullanım sunar. Akıllı kontrol sistemleri ile yakıt tasarrufu sağlar."
  },
  { 
    id: "demirdokum",
    name: "Demirdöküm", 
    img: "/dd-logo-2966321.png", 
    color: "#004a99",
    models: "Nitromix, Atromix, Vintomix, Nepto, Atron Condense",
    info: "Türkiye'nin öncü ısıtma markası DemirDöküm, geniş servis ağı ve kolay yedek parça imkanı ile en çok tercih edilen modelleri sunar. Yoğuşmalı teknolojide liderdir."
  },
  { 
    id: "protherm",
    name: "Protherm", 
    img: "/protherm_logo.png", 
    color: "#ff0000",
    models: "Lynx Condense, Jaguar Condense, Puma Condense",
    info: "Ekonomik ve performans odaklı çözümler sunan Protherm, kullanıcı dostu arayüzü ve sağlam yapısıyla bilinir. Fiyat/performans dengesi en yüksek markalardan biridir."
  },
  { 
    id: "ariston",
    name: "Ariston", 
    img: "/LogoAriston.svg", 
    color: "#cd2027",
    models: "Clas One, Alteas One, Genus One, Cares Premium, HS Premium",
    info: "İtalyan tasarımı ve ileri teknoloji ile birleşen Ariston kombiler, sessiz çalışma ve şık görünüm sunar. XtraTech paslanmaz çelik eşanjör ile dayanıklıdır.",
    isAuthorized: true,
    certificateImg: "/teeşkkür bellges.png",
    brandErrors: [
      { code: "101", desc: "Aşırı Isınma" },
      { code: "501", desc: "Alev Yok" },
      { code: "103-107", desc: "Sirkülasyon Hatası" },
      { code: "301", desc: "Ekran Kartı Hatası" }
    ]
  }
];

const Navbar = ({ toggleMenu, menuOpen, setMenuOpen }) => (
  <nav className="navbar">
    <div className="container nav-flex">
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <img src="/dd-logo-2966321.png" alt="DemirDöküm Logo" className="navbar-logo-img" />
      </Link>
      
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Anasayfa</Link></li>
        <li><a href="/#services" className="nav-item" onClick={() => setMenuOpen(false)}>Hizmetler</a></li>
        <li><a href="/#errors" className="nav-item" onClick={() => setMenuOpen(false)}>Hata Kodları</a></li>
        <li><a href="/#valve-guide" className="nav-item" onClick={() => setMenuOpen(false)}>Vana Rehberi</a></li>
        <li><a href="tel:+905444527090" className="nav-phone-link mobile-only"><Phone size={20} /> 0544 452 70 90</a></li>
      </ul>
      <a href="tel:+905444527090" className="nav-phone-link desktop-only"><Phone size={20} /> 0544 452 70 90</a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <img src="/dd-logo-2966321.png" alt="DemirDöküm Logo" className="footer-logo-img" />
          </div>
          <p style={{marginTop: '20px'}}>Çankırı'nın tüm noktalarına 7/24 hizmet veren DemirDöküm uzman teknik servisi.</p>
          <p style={{marginTop: '10px'}}><Mail size={16} style={{marginRight: '8px', verticalAlign: 'middle'}} /> cankiridemirdokumservis@gmail.com</p>
          <p style={{marginTop: '5px'}}><Phone size={16} style={{marginRight: '8px', verticalAlign: 'middle'}} /> +90 544 452 70 90</p>
        </div>
        <div className="footer-links">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><Link to="/">Anasayfa</Link></li>
            <li><a href="/#services">Hizmetler</a></li>
            <li><a href="/#errors">Hata Kodları</a></li>
            <li><a href="/#valve-guide">Vana Rehberi</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Teknik Destek</h4>
          <ul>
            <li><a href="/#errors">Arıza Kodları</a></li>
            <li><a href="/#valve-guide">Vana Bağlantısı</a></li>
            <li><a href="/#contact">Servis Talebi</a></li>
            <li><a href="/#about">Sertifikalarımız</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Sosyal Medya</h4>
          <div style={{display: 'flex', gap: '20px'}}>
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><MessageSquare /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DemirDöküm Teknik Servis. Tüm Hakları Saklıdır.</p>
      </div>
    </div>
  </footer>
);

const Home = () => {
  const whyUs = [
    { icon: <ShieldCheck size={40} />, title: "%100 Garanti", desc: "Yapılan tüm işlemler servis garantisi altındadır." },
    { icon: <Clock size={40} />, title: "Hızlı Servis", desc: "Aynı gün içinde arıza tespiti ve tamir imkanı." },
    { icon: <Wrench size={40} />, title: "Orijinal Parça", desc: "Sadece üretici onaylı orijinal yedek parçalar kullanılır." },
    { icon: <CircleCheck size={40} />, title: "Uzman Kadro", desc: "30 yıllık tecrübe ile profesyonel teknik destek." }
  ];

  const errorCodes = [
    { brand: "DemirDöküm", code: "F01", desc: "Aşırı Isınma Hatası", solution: "Petek vanalarını kontrol edin ve kombiyi resetleyin.", color: "#004a99" },
    { brand: "DemirDöküm", code: "F02", desc: "Sıcak Su Sensör Hatası", solution: "Teknik servis müdahalesi gereklidir.", color: "#004a99" },
    { brand: "DemirDöküm", code: "F04", desc: "Ateşleme Hatası", solution: "Gaz akışını ve iyonizasyonu kontrol edin.", color: "#004a99" },
    { brand: "Vaillant", code: "F28", desc: "Ateşleme Hatası", solution: "Gaz vanasının açık olduğundan emin olun.", color: "#008f7a" },
    { brand: "Vaillant", code: "F22", desc: "Kuru Yanma (Su Az)", solution: "Kombi basıncını 1.5 bar seviyesine getirin.", color: "#008f7a" },
    { brand: "Protherm", code: "F0", desc: "Düşük Su Basıncı", solution: "Basınç 1.5 bar olana kadar su basın.", color: "#ff0000" },
    { brand: "Protherm", code: "F1", desc: "Aşırı Isınma Emniyeti", solution: "Kombiyi resetleyin, vana kapalıysa açın.", color: "#ff0000" },
    { brand: "Ariston", code: "501", desc: "Alev Yok Hatası", solution: "Gaz akışını kontrol edin ve resetleyin.", color: "#cd2027" },
    { brand: "Ariston", code: "101", desc: "Aşırı Isınma", solution: "Reset butonuna basın ve vanaları kontrol edin.", color: "#cd2027" }
  ];

  const faqs = [
    { q: "Kombi bakımı ne sıklıkla yapılmalı?", a: "Verimlilik ve güvenlik için kombi bakımı yılda en az bir kez, tercihen kış sezonu öncesinde yapılmalıdır." },
    { q: "Arıza durumunda servis ne kadar sürede gelir?", a: "Hızlı servis prensibimizle, talebinizi oluşturduğunuz gün içerisinde adresinize ulaşıyoruz." },
    { q: "DemirDöküm yetkili servis belgeniz var mı?", a: "Evet, tüm teknisyenlerimiz gerekli eğitimleri almış ve sertifikalı uzmanlardır." }
  ];

  return (
    <>
      {/* 2. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content" data-aos="fade-right">
            <div className="badge-small">7/24 Teknik Servis</div>
            <h1>Çankırı'da DemirDöküm Uzman <br/><span>Teknik Servis</span></h1>
            <p>Çankırı ve çevresinde profesyonel kombi bakım, onarım ve montaj hizmetleri. 30 yıllık tecrübe ve garantili işçilik ile evinizin sıcaklığını güvenceye alıyoruz.</p>
            <div className="hero-actions">
              <a href="tel:+905444527090" className="btn-orange">Servis Çağır</a>
              <a href="#services" className="btn-outline">Hizmetlerimiz</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOBLO ANIMATION (COMMENTED) */}

      {/* 4. ABOUT US SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-info" data-aos="fade-up">
              <h2>Profesyonel Hizmet Anlayışı</h2>
              <p>1995 yılından bu yana Çankırı genelinde DemirDöküm başta olmak üzere tüm marka kombiler için teknik servis hizmeti sunmaktayız. Eğitimli kadromuz ve modern ekipmanlarımızla, ısıtma sistemlerinizin en yüksek verimle çalışmasını sağlıyoruz.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h4>5000+</h4>
                  <p>Mutlu Müşteri</p>
                </div>
                <div className="stat-item">
                  <h4>1000+</h4>
                  <p>Teşekkür Belgesi</p>
                </div>
                <div className="stat-item">
                  <h4>Hızlı</h4>
                  <p>Aynı Gün Hizmet</p>
                </div>
              </div>
            </div>
            <div className="about-image" data-aos="fade-left">
               <img src="/usta.png" alt="1000+ Teşekkür Belgesi" style={{width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Uzmanlık Alanlarımız</h2>
          <div className="services-grid">
            {brands.map((brand, i) => (
              <div key={i} className="service-card" data-aos="fade-up" data-aos-delay={i * 100} style={{borderTop: `4px solid ${brand.color}`}}>
                <div className="card-img-box">
                  <img src={brand.img} alt={brand.name} />
                </div>
                <h3 style={{color: brand.color}}>{brand.name} Servisi</h3>
                <p>Orijinal yedek parça ve profesyonel arıza tespiti ile {brand.name} garantili bakım hizmeti.</p>
                <Link to={`/brand/${brand.id}`} className="card-btn-solid" style={{background: brand.color, textDecoration: 'none'}}>
                  Detaylı Bilgi <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ERROR CODES SECTION */}
      <section id="errors" className="errors-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Kombi Hata Kodları</h2>
          <p className="section-subtitle">Kombinizde beliren hata kodunun anlamını öğrenin ve ne yapmanız gerektiğini görün.</p>
          <div className="errors-grid">
            {errorCodes.map((err, i) => (
              <div key={i} className="error-card" data-aos="fade-up" style={{borderLeftColor: err.color}}>
                <div className="error-header">
                  <span className="brand-tag" style={{color: err.color}}>{err.brand}</span>
                  <span className="error-code" style={{background: err.color}}>{err.code}</span>
                </div>
                <h3>{err.desc}</h3>
                <p><strong>Çözüm:</strong> {err.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VALVE GUIDE SECTION */}
      <section id="valve-guide" className="valve-guide-section">
        <div className="container">
          <div className="guide-grid">
            <div className="guide-image" data-aos="fade-right">
              <img src="/kombivana .png" alt="Petek Vana Bağlantı Rehberi" />
            </div>
            <div className="guide-content" data-aos="fade-left">
              <h2>Petek Vanası Nasıl Bağlanmalı?</h2>
              <p>Doğru vana bağlantısı, peteklerinizin tam verimle ısınmasını sağlar ve enerji tasarrufu sağlar. Dikkat etmeniz gerekenler:</p>
              <ul className="guide-list">
                <li><CircleCheck size={20} /> Sıcak su girişi her zaman üst vanadan yapılmalıdır.</li>
                <li><CircleCheck size={20} /> Dönüş suyu çıkışı alt vanadan sağlanmalıdır.</li>
                <li><CircleCheck size={20} /> Çapraz bağlantı büyük peteklerde daha yüksek verim sağlar.</li>
                <li><CircleCheck size={20} /> Vana çevresinde su kaçağı kontrolü düzenli yapılmalıdır.</li>
              </ul>
              <a href="tel:+905444527090" className="btn-orange">Vana Değişimi İçin Ara</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}} data-aos="fade-up">Neden Bizi Seçmelisiniz?</h2>
          <div className="why-grid">
            {[
              { icon: <ShieldCheck size={40} />, title: "%100 Garanti", desc: "Yapılan tüm işlemler servis garantisi altındadır." },
              { icon: <Clock size={40} />, title: "Hızlı Servis", desc: "Aynı gün içinde arıza tespiti ve tamir imkanı." },
              { icon: <Wrench size={40} />, title: "Orijinal Parça", desc: "Sadece üretici onaylı orijinal yedek parçalar kullanılır." },
              { icon: <CircleCheck size={40} />, title: "Uzman Kadro", desc: "30 yıllık tecrübe ile profesyonel teknik destek." }
            ].map((item, i) => (
              <div key={i} className="why-card" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="faq-section container" style={{padding: '100px 0'}}>
        <h2 className="section-title" data-aos="fade-up">Sıkça Sorulan Sorular</h2>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px'}} data-aos="fade-up">
              <h3 style={{fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <CircleHelp size={20} color="var(--accent)" /> {faq.q}
              </h3>
              <p style={{color: 'var(--text-muted)'}}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="contact-section" style={{padding: 0}}>
        <div className="full-width-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48726.33230325!2d33.616667!3d40.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40816b80173e6357%3A0x6b772c676d214f4e!2s%C3%87ank%C4%B1r%C4%B1%2C%20Merkez%2F%C3%87ank%C4%B1r%C4%B1!5e0!3m2!1str!2str!4v1712438176000!5m2!1str!2str" 
            width="100%" height="500" style={{border:0, display: 'block'}} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </section>
    </>
  );
};

const BrandDetail = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const brand = brands.find(b => b.id === brandId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!brand) return <div className="container" style={{padding: '100px 0'}}>Marka bulunamadı. <Link to="/">Geri Dön</Link></div>;

  return (
    <section className="brand-detail-page" style={{padding: '100px 0 60px', minHeight: '100vh', background: '#f8fafc'}}>
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> Geri Dön
        </button>
        
        <div className="detail-card" style={{borderTop: `8px solid ${brand.color}`, marginTop: '20px'}}>
          <div className="detail-grid">
            <div className="detail-header">
              <img src={brand.img} alt={brand.name} className="detail-logo" />
              <h2>{brand.name} Uzmanlık Detayları</h2>
              {brand.isAuthorized && <span className="auth-badge">Yetkili Servis</span>}
            </div>
            
            <div className="detail-body">
              <div className="detail-info">
                <h3>Marka Hakkında</h3>
                <p>{brand.info}</p>
                
                {brand.brandErrors && (
                  <div className="detail-errors" style={{marginTop: '30px'}}>
                    <h3>Sık Karşılaşılan Hata Kodları</h3>
                    <div className="mini-error-grid">
                      {brand.brandErrors.map((err, idx) => (
                        <div key={idx} className="mini-error-item">
                          <span style={{color: brand.color, fontWeight: 'bold'}}>{err.code}:</span> {err.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="detail-models">
                <h3>Tamir ve Satışı Yapılan Modeller</h3>
                <ul className="model-list">
                  {brand.models.split(', ').map((model, idx) => (
                    <li key={idx}><CircleCheck size={18} color={brand.color} /> {model}</li>
                  ))}
                </ul>
                
                {brand.certificateImg && (
                  <div className="detail-cert" style={{marginTop: '40px'}}>
                    <h3>Yetki ve Başarı Belgemiz</h3>
                    <img src={brand.certificateImg} alt="Yetki Belgesi" className="cert-img-small" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="detail-footer">
               <a href="tel:+905444527090" className="btn-orange" style={{background: brand.color, border: 'none', color: 'white', textDecoration: 'none'}}>Hemen Servis Çağır</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="landing-page">
        <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand/:brandId" element={<BrandDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;