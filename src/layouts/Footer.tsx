import {
  Facebook,
  GlobeIcon,
  Instagram,
  MailIcon,
  MapPin,
  PhoneIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-secondary/30 to-primary/20 pt-16 pb-8">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/assets/footer.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và giới thiệu */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Hoa Thạch Thảo"
                width={150}
                height={60}
                className="h-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              Hoa Thạch Thảo - Nơi chăm sóc sắc đẹp và sức khỏe toàn diện cho
              phái đẹp với các dịch vụ spa cao cấp và chuyên nghiệp.
            </p>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  73bis Thạch Thị Thanh, Phường Tân Định, Quận 1, Hồ Chí Minh,
                  Vietnam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+84901234567"
                  className="hover:text-primary transition-colors"
                >
                  090 912 3456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:hoathachthaonuskin@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  hoathachthaonuskin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <GlobeIcon className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="https://hoathachthao.com"
                  className="hover:text-primary transition-colors"
                >
                  hoathachthao.com
                </a>
              </li>
            </ul>
          </div>

          {/* Menu nhanh */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Chăm sóc da
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Massage trị liệu
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Tắm trắng
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Điều trị thâm nám
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Phun xăm thẩm mỹ
                </Link>
              </li>
            </ul>
          </div>

          {/* Đăng ký nhận tin */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Đăng Ký Nhận Tin</h3>
            <p className="text-muted-foreground">
              Đăng ký để nhận thông tin khuyến mãi mới nhất
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md transition-colors"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        {/* Phần dưới footer */}
        <div className="mt-12 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hoa Thạch Thảo. Tất cả quyền được bảo
            lưu.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578049594663&locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
