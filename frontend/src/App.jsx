import React, { useEffect, useState } from "react";
import { Phone, MessageSquare, Mail, MapPin, Instagram, Facebook, ShieldCheck, Clock, Wrench, CircleCheck, ChevronRight, CircleHelp, Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    AOS.init({ duration: 1000, once: true });
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (loading) {
    return (
      <div className="simple-loader">
        <div className="spinner-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  const brands = [
    { 
      name: "Demirdöküm", 
      img: "/dd-logo-2966321.png", 
      color: "#004a99",
      models: "Nitromix, Atromix, Vintomix, Nepto, Atron Condense",
      info: "Türkiye'nin öncü ısıtma markası DemirDöküm, geniş servis ağı ve kolay yedek parça imkanı ile en çok tercih edilen modelleri sunar. Yoğuşmalı teknolojide liderdir."
    },
    { 
      name: "Vaillant", 
      img: "/vaillant-logo-272x72-1888261.png", 
      color: "#008f7a",
      models: "EcoTEC Intro, EcoTEC Plus, VUW TR Serisi, TurboMAG",
      info: "Alman teknolojisi ile üretilen Vaillant kombiler, yüksek enerji verimliliği ve uzun ömürlü kullanım sunar. Akıllı kontrol sistemleri ile yakıt tasarrufu sağlar."
    },
    { 
      name: "Protherm", 
      img: "/protherm_logo.png", 
      color: "#ff0000",
      models: "Lynx Condense, Jaguar Condense, Puma Condense",
      info: "Ekonomik ve performans odaklı çözümler sunan Protherm, kullanıcı dostu arayüzü ve sağlam yapısıyla bilinir. Fiyat/performans dengesi en yüksek markalardan biridir."
    },
    { 
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
    { q: "Çankırı'da kombi servisi nereye çağırılır?", a: "Çankırı'da kombi servisi için 0544 452 70 90 numaralı hattımızı arayabilirsiniz. Aynı gün içinde adresinize ulaşıyoruz." },
    { q: "Çankırı DemirDöküm servisi var mı?", a: "Evet, Çankırı'nın en köklü DemirDöküm kombi servis noktasıyız. 1995'ten bu yana Çankırı genelinde DemirDöküm bakım ve onarım hizmeti veriyoruz." },
    { q: "Kombi bakımı ne sıklıkla yapılmalı?", a: "Verimlilik ve güvenlik için kombi bakımı yılda en az bir kez, tercihen kış sezonu öncesinde yapılmalıdır." },
    { q: "Arıza durumunda servis ne kadar sürede gelir?", a: "Hızlı servis prensibimizle, talebinizi oluşturduğunuz gün içerisinde adresinize ulaşıyoruz." },
    { q: "Çankırı'da kombi servisi bulabilir miyim?", a: "Evet! 30 yıllık tecrübemizle Çankırı'nın en deneyimli kombi ve DemirDöküm teknik servisi olarak hizmetinizdeyiz. Tüm marka kombiler için bakım ve onarım yapıyoruz." }
  ];

  return (
    <div className="landing-page">
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="container nav-flex">
          <div className="logo">
            <img src="/dd-logo-2966321.png" alt="DemirDöküm Logo" className="navbar-logo-img" />
          </div>
          
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" className="nav-item" onClick={() => setMenuOpen(false)}>Anasayfa</a></li>
            <li><a href="#services" className="nav-item" onClick={() => setMenuOpen(false)}>Hizmetler</a></li>
            <li><a href="#errors" className="nav-item" onClick={() => setMenuOpen(false)}>Hata Kodları</a></li>
            <li><a href="#valve-guide" className="nav-item" onClick={() => setMenuOpen(false)}>Vana Rehberi</a></li>
            <li><a href="tel:+905444527090" className="nav-phone-link mobile-only"><Phone size={20} /> 0544 452 70 90</a></li>
          </ul>
          <a href="tel:+905444527090" className="nav-phone-link desktop-only"><Phone size={20} /> 0544 452 70 90</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content" data-aos="fade-right">
            <div className="badge-small">Çankırı DemirDöküm Servis | Kombi Teknik Servis</div>
            <h1>Çankırı <span>DemirDöküm Servisi</span><br />& Kombi Teknik Servis</h1>
            <p>Çankırı'nın en güvenilir <strong>DemirDöküm teknik servis</strong> ve <strong>kombi servis</strong> noktası. Vaillant, Ariston ve tüm marka kombiler için profesyonel bakım ve onarım. 30 yıllık tecrübe, aynı gün hizmet.</p>
            <div className="hero-actions">
              <a href="tel:+905444527090" className="btn-orange">Servis Çağır</a>
              <a href="#services" className="btn-outline">Hizmetlerimiz</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOBLO ANIMATION */}
      {/* <section className="vehicle-section">
        <div className="road-animation"></div>
        <div className="doblo-track">
          <img src="/doblo.png" alt="Servis Aracı" className="doblo-img" />
        </div>
      </section> */}

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
               <img src="/usta.png" alt="Çankırı Ariston Teknik Servis Belgesi" style={{width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)'}} />
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
                <button 
                  className="card-btn-solid" 
                  style={{background: brand.color}}
                  onClick={() => {
                    setSelectedBrand(brand);
                    document.getElementById('brand-detail')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Detaylı Bilgi <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* BRAND DETAILS SECTION */}
      {selectedBrand && (
        <section id="brand-detail" className="brand-detail-section" data-aos="zoom-in">
          <div className="container">
            <div className="detail-card-premium" style={{borderTop: `10px solid ${selectedBrand.color}`}}>
              <div className="detail-header-premium">
                <div className="header-left">
                  <img src={selectedBrand.img} alt={selectedBrand.name} className="detail-logo-large" />
                  <div className="header-text">
                    <h2>{selectedBrand.name} Kurumsal Teknik Servis</h2>
                    {selectedBrand.isAuthorized && <span className="authorized-badge-pill">Yetkili Servis Noktası</span>}
                  </div>
                </div>
                <button className="close-x" onClick={() => setSelectedBrand(null)}><X size={30} /></button>
              </div>

              <div className="detail-grid-three">
                {/* COLUMN 1: BRAND INFO */}
                <div className="detail-col">
                  <div className="col-header"><ShieldCheck size={24} color={selectedBrand.color} /> <h3>Marka Uzmanlığı</h3></div>
                  <p className="col-desc">{selectedBrand.info}</p>
                  <div className="trust-badges-mini">
                    <div className="trust-item"><Clock size={16} /> 7/24 Destek</div>
                    <div className="trust-item"><Wrench size={16} /> Orijinal Parça</div>
                  </div>
                </div>

                {/* COLUMN 2: MODELS */}
                <div className="detail-col">
                  <div className="col-header"><Wrench size={24} color={selectedBrand.color} /> <h3>Hizmet Verilen Modeller</h3></div>
                  <div className="models-tag-cloud">
                    {selectedBrand.models.split(', ').map((model, idx) => (
                      <span key={idx} className="model-tag-small"><CircleCheck size={14} color={selectedBrand.color} /> {model}</span>
                    ))}
                  </div>
                </div>

                {/* COLUMN 3: ERRORS */}
                <div className="detail-col">
                  <div className="col-header"><CircleHelp size={24} color={selectedBrand.color} /> <h3>Arıza Kodları</h3></div>
                  {selectedBrand.brandErrors ? (
                    <div className="error-list-compact">
                      {selectedBrand.brandErrors.map((err, idx) => (
                        <div key={idx} className="error-item-mini">
                          <span className="error-code-label" style={{color: selectedBrand.color}}>{err.code}:</span> {err.desc}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="col-desc">Tüm {selectedBrand.name} hata kodları için teknik destek alabilirsiniz.</p>
                  )}
                </div>
              </div>

              {selectedBrand.certificateImg && (
                <div className="detail-cert-full">
                  <div className="detail-divider"></div>
                  <div className="cert-centered-layout">
                    <div className="cert-info">
                      <h3>Yetki ve Başarı Belgemiz</h3>
                      <p>Sizlere en kaliteli hizmeti sunmak için sürekli eğitim alan sertifikalı uzmanlarımızla hizmetinizdeyiz.</p>
                      <a href="tel:+905444527090" className="btn-orange" style={{background: selectedBrand.color, border: 'none', color: 'white', marginTop: '60px', textDecoration: 'none', display: 'inline-block'}}>Servis Talebi Oluştur</a>
                    </div>
                    <div className="cert-image-box">
                      <img src={selectedBrand.certificateImg} alt="Yetki Belgesi" className="cert-img-final" />
                    </div>
                  </div>
                </div>
              )}

              {!selectedBrand.certificateImg && (
                <div className="detail-footer-cta">
                  <div className="detail-divider"></div>
                  <a href="tel:+905444527090" className="btn-orange-large" style={{background: selectedBrand.color, textDecoration: 'none'}}>
                    <Phone size={24} /> {selectedBrand.name} Servis Hattı: 0544 452 70 90
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* NEW: ERROR CODES SECTION */}
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

      {/* NEW: VALVE GUIDE SECTION */}
      <section id="valve-guide" className="valve-guide-section">
        <div className="container">
          <div className="guide-grid">
            <div className="guide-image" data-aos="fade-right">
              <img src="/kombivana .png" alt="Çankırı Kombi Tamiri Vana Bağlantı Rehberi" />
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

      {/* NEW: CERTIFICATES SECTION */}
      {/* <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Yetki ve Başarı Belgelerimiz</h2>
          <div className="cert-intro">
            <div className="cert-text">
              <h3>1000'den Fazla Teşekkür ve Takdir Belgesi</h3>
              <p>Sunduğumuz kaliteli hizmet ve müşteri memnuniyeti odaklı çalışmamızın karşılığını, müşterilerimizden aldığımız binlerce teşekkür belgesi ile taçlandırıyoruz. Hızlı servis ve kesin çözüm ilkemizden asla ödün vermiyoruz.</p>
            </div>
            <div className="cert-showcase" data-aos="zoom-in">
              <img src="/teeşkkür bellges.png" alt="Uzman Usta" className="main-cert" />
              <div className="cert-overlay">
                <h4>HIZLI HİZMET</h4>
                <p>Aynı Gün Müdahale</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 6. WHY CHOOSE US */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}} data-aos="fade-up">Neden Bizi Seçmelisiniz?</h2>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="why-card" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
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

      {/* 8. CONTACT SECTION - FULL WIDTH MAP */}
      <section id="contact" className="contact-section" style={{padding: 0}}>
        <div className="full-width-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48726.33230325!2d33.616667!3d40.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40816b80173e6357%3A0x6b772c676d214f4e!2s%C3%87ank%C4%B1r%C4%B1%2C%20Merkez%2F%C3%87ank%C4%B1r%C4%B1!5e0!3m2!1str!2str!4v1712438176000!5m2!1str!2str" 
            width="100%" height="500" style={{border:0, display: 'block'}} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </section>

      {/* 9. FOOTER */}
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
                <li><a href="#home">Anasayfa</a></li>
                <li><a href="#services">Hizmetler</a></li>
                <li><a href="#errors">Hata Kodları</a></li>
                <li><a href="#valve-guide">Vana Rehberi</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Teknik Destek</h4>
              <ul>
                <li><a href="#errors">Arıza Kodları</a></li>
                <li><a href="#valve-guide">Vana Bağlantısı</a></li>
                <li><a href="#contact">Servis Talebi</a></li>
                <li><a href="#about">Sertifikalarımız</a></li>
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
            <p>© 2025 Çankırı DemirDöküm Teknik Servis - Kombi Servis. Tüm Hakları Saklıdır.</p>
            {/* SEO Keywords - Hidden visually but indexed */}
            <p style={{fontSize: '10px', color: 'transparent', userSelect: 'none', lineHeight: '0', overflow: 'hidden', height: 0}} aria-hidden="true">
              kombi servis çankırı, çankırı kombi ustası, demirdöküm servis çankırı, çankırı kombi servis, çankırı demirdöküm servis, kombi tamiri çankırı, kombi bakımı çankırı, çankırı ısıtma servisi, vaillant servis çankırı, ariston servis çankırı
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;