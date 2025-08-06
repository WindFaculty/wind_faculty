document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded and DOM is ready.');

    const characterImages = document.querySelectorAll('.character-grid img');
    const imageDiv = document.getElementById('image');
    const characterInfo = document.getElementById('character-info');
    const restoreButton = document.getElementById('restore-button');

    // Dữ liệu nhân vật
    const characters = {
        'Mizuki': {
            element: 'Phong',
            region: 'Inazuma',
            description: 'Là một nhân vật 5★ thuộc hệ Phong, sử dụng pháp khí (Catalyst). Mizuki là một nhà tâm lý học bí ẩn đến từ Inazuma, có khả năng “ăn giấc mơ” để chữa lành tâm trí người khác. Trong chiến đấu, cô triệu hồi những sinh vật mộng mị gây sát thương Phong và hồi máu cho đồng đội. Lối chơi của Mizuki độc đáo khi không sử dụng đòn đánh thường, mà tập trung vào kỹ năng nguyên tố và phản ứng Swirl.'
        },
        'Yae Miko': {
            element: 'Lôi',
            region: 'Inazuma',
            description: 'Là một nhân vật 5★ thuộc hệ Lôi, sử dụng pháp khí (Catalyst). Yae Miko là Guuji của Grand Narukami Shrine, đồng thời là bạn thân lâu năm của Raiden Ei. Trong chiến đấu, cô triệu hồi Sesshou Sakura – những cột điện gây sát thương liên tục lên kẻ địch. Với phong cách chiến đấu off-field, Yae Miko là lựa chọn lý tưởng cho các đội hình Electro phản ứng như Aggravate hoặc Hyperbloom.'
        },
        'Sangonomiya Kokomi': {
            element: 'Thủy',
            region: 'Inazuma',
            description: 'Là một nhân vật 5★ thuộc hệ Thủy trong trò chơi Genshin Impact, sử dụng pháp khí (Catalyst) làm vũ khí chính. Cô là Thần Nữ của đảo Watatsumi, hậu duệ của gia tộc Sangonomiya, và là người lãnh đạo quân đội Watatsumi với tài năng chiến lược xuất sắc. Kokomi nổi tiếng với khả năng hồi máu vượt trội và lối chơi thiên về hỗ trợ, không dựa vào chí mạng mà tập trung vào HP và hiệu quả nguyên tố.'
        },
        'Furina': {
            element: 'Thủy',
            region: 'Fontaine',
            description: 'Là một nhân vật 5★ thuộc hệ Thủy, sử dụng kiếm đơn (Sword). Furina là Hydro Archon của Fontaine, mang hai mặt tính cách: một bên là nữ thần sân khấu hào nhoáng, một bên là người quan sát sâu sắc. Trong chiến đấu, cô chuyển đổi giữa hai trạng thái Pneuma và Ousia, triệu hồi sinh vật hỗ trợ và tăng sát thương toàn đội dựa trên biến động HP. Furina là một trong những nhân vật hỗ trợ mạnh nhất hiện nay.'
        },
        'Raiden Shogun': {
            element: 'Lôi',
            region: 'Inazuma',
            description: 'Là một nhân vật 5★ thuộc hệ Lôi, sử dụng giáo (Polearm). Raiden Shogun là Electro Archon của Inazuma, hiện thân của “Eternity”. Cô sở hữu kỹ năng nộ cực kỳ mạnh mẽ, gây sát thương diện rộng và hồi năng lượng cho toàn đội. Với vai trò là DPS chính hoặc hỗ trợ năng lượng, Raiden là trụ cột trong nhiều đội hình meta nhờ khả năng duy trì kỹ năng nộ liên tục.'
        }
    };

    characterImages.forEach(img => {
        img.addEventListener('click', upDate);
        img.addEventListener('mouseout', undo);
    });

    restoreButton.addEventListener('click', undo);

    function upDate(previewPic) {
        console.log('Click event triggered on image.');
        console.log('Image alt:', previewPic.alt);
        console.log('Image src:', previewPic.src);

        // Cập nhật hình ảnh
        imageDiv.innerHTML = '';
        const imgClone = previewPic.cloneNode(true);
        imgClone.style.border = 'none';
        imgClone.style.padding = '0';
        imgClone.style.width = '100%';
        imgClone.style.height = 'auto';
        imageDiv.appendChild(imgClone);

        // Cập nhật thông tin nhân vật
        const charData = characters[previewPic.alt];
        characterInfo.innerHTML = `
            <h2>${previewPic.alt}</h2>
            <p><strong>Nguyên tố:</strong> ${charData.element}</p>
            <p><strong>Khu vực:</strong> ${charData.region}</p>
            <p>${charData.description}</p>
        `;

        // Hiển thị nút khôi phục
        restoreButton.style.display = 'block';
    }

    function undo() {
        console.log('Undo event triggered.');
        imageDiv.innerHTML = 'Di chuột lên hình ảnh bên dưới để hiển thị tại đây.';
        imageDiv.style.backgroundImage = "url('')";
        characterInfo.innerHTML = '';
        restoreButton.style.display = 'none';
    }
});