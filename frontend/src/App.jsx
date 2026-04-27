import React, { useEffect } from "react";
import { Phone, MessageSquare, Mail, MapPin, Instagram, Facebook, ShieldCheck, Clock, Wrench, CircleCheck, ChevronRight, CircleHelp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const brands = [
    { name: "Vaillant", img: "/brand/vaillant.png" },
    { name: "Demirdöküm", img: "/brand/demirdokum.png" },
    { name: "Protherm", img: "/brand/protherm.png" },
    { name: "Ariston", img: "/brand/ariston.png" }
  ];

  const whyUs = [
    { icon: <ShieldCheck size={40} />, title: "%100 Garanti", desc: "Yapılan tüm işlemler servis garantisi altındadır." },
    { icon: <Clock size={40} />, title: "Hızlı Servis", desc: "Aynı gün içinde arıza tespiti ve tamir imkanı." },
    { icon: <Wrench size={40} />, title: "Orijinal Parça", desc: "Sadece üretici onaylı orijinal yedek parçalar kullanılır." },
    { icon: <CircleCheck size={40} />, title: "Uzman Kadro", desc: "15 yıllık tecrübe ile profesyonel teknik destek." }
  ];

  const faqs = [
    { q: "Kombi bakımı ne sıklıkla yapılmalı?", a: "Verimlilik ve güvenlik için kombi bakımı yılda en az bir kez, tercihen kış sezonu öncesinde yapılmalıdır." },
    { q: "Arıza durumunda servis ne kadar sürede gelir?", a: "Genellikle servis talebinizi oluşturduğunuz gün içerisinde adresinize ulaşıyoruz." },
    { q: "Hangi markalara hizmet veriyorsunuz?", a: "Vaillant, Demirdöküm, Protherm, Ariston başta olmak üzere tüm popüler markalara hizmet vermekteyiz." }
  ];

  return (
    <div className="landing-page">
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="container nav-flex">
          <div className="logo">KOMBİ<span>USTASI</span></div>
          <ul className="nav-links">
            <li><a href="#home" className="nav-item">Anasayfa</a></li>
            <li><a href="#about" className="nav-item">Hakkımızda</a></li>
            <li><a href="#services" className="nav-item">Hizmetlerimiz</a></li>
            <li><a href="#contact" className="nav-item">İletişim</a></li>
          </ul>
          <a href="tel:+905555555555" className="nav-btn">Hemen Ara</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content" data-aos="fade-right">
            <h1>Evinizdeki Sıcaklık, <br/>Bizim <span>Güvencemiz</span></h1>
            <p>Profesyonel kombi bakım, onarım ve montaj hizmetlerinde 15 yıllık tecrübe ile yanınızdayız. Güvenilir, hızlı ve garantili çözümler.</p>
            <div className="hero-actions">
              <a href="#contact" className="btn-orange">Ücretsiz Fiyat Al</a>
              <a href="#services" className="btn-outline">Hizmetlerimiz</a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src="/usta.png" alt="Teknik Servis Ustası" className="usta-img" />
          </div>
        </div>
      </section>

      {/* 3. DOBLO ANIMATION */}
      <section className="vehicle-section">
        <div className="road-animation"></div>
        <div className="doblo-track">
          <img src="/doblo.png" alt="Servis Aracı" className="doblo-img" />
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-info" data-aos="fade-up">
              <h2>Biz Kimiz?</h2>
              <p>2010 yılından bu yana Çankırı genelinde kombi teknik servisi olarak hizmet veriyoruz. Müşteri memnuniyetini odağımıza alarak, evinizdeki konforun kesilmemesi için çalışıyoruz.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h4>5000+</h4>
                  <p>Mutlu Müşteri</p>
                </div>
                <div className="stat-item">
                  <h4>15</h4>
                  <p>Yıllık Tecrübe</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Destek Hattı</p>
                </div>
              </div>
            </div>
            <div className="about-image" data-aos="fade-left">
               <div style={{background: 'var(--primary)', height: '300px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <Wrench size={80} opacity={0.3} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Hizmet Verdiğimiz Markalar</h2>
          <div className="services-grid">
            {brands.map((brand, i) => (
              <div key={i} className="service-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="card-img-box">
                  <img src={brand.img} alt={brand.name} />
                </div>
                <h3>{brand.name}</h3>
                <p>Orijinal yedek parça ve profesyonel arıza tespiti ile {brand.name} servis hizmeti.</p>
                <button className="card-btn">Soru Sor <ChevronRight size={16} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-box" data-aos="fade-right">
              <h2>Bize Ulaşın</h2>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Adınız Soyadınız" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="E-posta Adresiniz" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Mesajınız veya Kombi Arızanız" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled>Gönder (Yakında Aktif)</button>
              </form>
            </div>
            <div className="map-info" data-aos="fade-left">
              <div className="contact-details">
                <div className="detail-item"><Phone size={24}/> <span>0555 555 55 55</span></div>
                <div className="detail-item"><Mail size={24}/> <span>destek@kombiustasi.com</span></div>
                <div className="detail-item"><MapPin size={24}/> <span>Çankırı Merkez</span></div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48726.33230325!2d33.616667!3d40.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40816b80173e6357%3A0x6b772c676d214f4e!2s%C3%87ank%C4%B1r%C4%B1%2C%20Merkez%2F%C3%87ank%C4%B1r%C4%B1!5e0!3m2!1str!2str!4v1712438176000!5m2!1str!2str" 
                width="100%" height="300" style={{border:0, borderRadius:'15px', boxShadow: 'var(--shadow-md)'}} allowFullScreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{color:'white'}}>KOMBİ<span>USTASI</span></div>
              <p style={{marginTop: '20px'}}>Çankırı'nın tüm noktalarına 7/24 hizmet veren profesyonel kombi teknik servisi.</p>
            </div>
            <div className="footer-links">
              <h4>Hızlı Linkler</h4>
              <ul>
                <li><a href="#home">Anasayfa</a></li>
                <li><a href="#about">Hakkımızda</a></li>
                <li><a href="#services">Hizmetler</a></li>
                <li><a href="#contact">İletişim</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Hizmetler</h4>
              <ul>
                <li><a href="#">Kombi Bakımı</a></li>
                <li><a href="#">Arıza Onarım</a></li>
                <li><a href="#">Petek Temizliği</a></li>
                <li><a href="#">Kombi Montajı</a></li>
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
            <p>© 2025 Tüm Hakları Saklıdır. Kombi Bakım ve Onarım Merkezi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;