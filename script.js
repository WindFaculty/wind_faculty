const characters = {
  ayaka: {
    name: "Kamisato Ayaka",
    background: "url('images/ayaka.jpg')",
    info: `
      <h2>Kamisato Ayaka – Shirasagi Himegimi</h2>
      <p>Quốc gia: Inazuma | Nguyên tố: Cryo | Vũ khí: Kiếm đơn</p>
      <p>Tiểu sử: Đại tiểu thư gia tộc Kamisato, thanh lịch và trí tuệ.</p>
    `
  },
  raiden: {
    name: "Raiden Shogun",
    background: "url('images/raiden.jpg')",
    info: `
      <h2>Raiden Shogun – Chúa Tể Sấm Sét</h2>
      <p>Quốc gia: Inazuma | Nguyên tố: Electro | Vũ khí: Giáo</p>
      <p>Tiểu sử: Lôi Thần của Inazuma, theo đuổi lý tưởng vĩnh hằng.</p>
    `
  },
  kokomi: {
    name: "Sangonomiya Kokomi",
    background: "url('images/kokomi.jpg')",
    info: `
      <h2>Sangonomiya Kokomi – Thánh Pháp Sư</h2>
      <p>Quốc gia: Inazuma | Nguyên tố: Hydro | Vũ khí: Pháp khí</p>
      <p>Tiểu sử: Chiến lược gia tài ba, lãnh đạo đảo Watatsumi.</p>
    `
  },
  yae: {
    name: "Yae Miko",
    background: "url('images/yae.jpg')",
    info: `
      <h2>Yae Miko – Guuji thần bí</h2>
      <p>Quốc gia: Inazuma | Nguyên tố: Electro | Vũ khí: Pháp khí</p>
      <p>Tiểu sử: Trưởng tế thần của Đền Narukami, sắc sảo và quyến rũ.</p>
    `
  },
  mizuki: {
    name: "Yumemizuki Mizuki",
    background: "url('images/mizuki.jpg')",
    info: `
      <h2>Yumemizuki Mizuki – Hoa Mộng Mơ của Liyue</h2>
      <p>Quốc gia: Liyue | Nguyên tố: Dendro | Vũ khí: Pháp khí</p>
      <p>Tiểu sử: Nhà thực vật học dịu dàng, sáng lập Hội Hoa Mộng Mơ.</p>
    `
  }
};

function showCharacter(key) {
  const character = characters[key];
  document.body.style.backgroundImage = character.background;
  document.getElementById("character-info").innerHTML = character.info;
}