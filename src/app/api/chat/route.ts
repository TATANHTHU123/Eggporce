import knowledge from '@/data/knowledge';

function contains(text: string, keywords: string[]) {
    return keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
    );
}

function formatFounder(founder: any) {
    return `
👤 ${founder.name}

🏷️ Chức vụ
${founder.role}

📝 Mô tả
${founder.description}
`;
}

export async function POST(req: Request) {
    const { message } = await req.json();

    const text = message.toLowerCase().trim();

    let reply = '';

    // =========================
    // CEO / CTO / CFO / CMO...
    // =========================

    const roles = ['CEO', 'CTO', 'CFO', 'CMO', 'COO', 'CPO'];

    const askedRole = roles.find((role) =>
        text.includes(role.toLowerCase())
    );

    if (askedRole) {
        const person = knowledge.founders.find((founder) =>
            founder.role.includes(askedRole)
        );

        if (person) {
            return Response.json({
                reply: formatFounder(person),
            });
        }
    }

    // =========================
    // TÌM THÀNH VIÊN THEO TÊN
    // =========================

    const founder = knowledge.founders.find((person) =>
        text.includes(person.name.toLowerCase())
    );

    if (founder) {
        return Response.json({
            reply: formatFounder(founder),
        });
    }

    // =========================
    // TÌM SẢN PHẨM THEO TÊN
    // =========================

    const product = knowledge.products.find((item) =>
        text.includes(item.name.toLowerCase())
    );

    if (product) {
        return Response.json({
            reply: `
📦 ${product.name}

🏷️ Danh mục
${product.category}

💰 Giá bán
${product.price}

📝 Mô tả
${product.description}
`,
        });
    }

    // =========================
    // CHẤT LIỆU
    // =========================

    if (
        contains(text, [
            'làm từ gì',
            'chất liệu',
            'nguyên liệu',
            'vỏ trứng',
            'làm bằng gì',
        ])
    ) {
        reply = `
🥚 Chất liệu sản phẩm

${knowledge.company.material}
`;
    }

    // =========================
    // GIỚI THIỆU
    // =========================

    else if (
        contains(text, [
            'eggporce',
            'giới thiệu',
            'là gì',
            'công ty',
            'dự án',
        ])
    ) {
        reply = `
🌱 ${knowledge.company.name}

${knowledge.company.description}

✨ Slogan
${knowledge.company.slogan}

🎯 Sứ mệnh
${knowledge.company.mission}

🔭 Tầm nhìn
${knowledge.company.vision}
`;
    }

    // =========================
    // SỨ MỆNH
    // =========================

    else if (
        contains(text, [
            'sứ mệnh',
            'mục tiêu',
        ])
    ) {
        reply = `
🎯 Sứ mệnh

${knowledge.company.mission}
`;
    }

    // =========================
    // TẦM NHÌN
    // =========================

    else if (
        contains(text, [
            'tầm nhìn',
            'vision',
        ])
    ) {
        reply = `
🔭 Tầm nhìn

${knowledge.company.vision}
`;
    }

    // =========================
    // GIÁ TRỊ CỐT LÕI
    // =========================

    else if (
        contains(text, [
            'giá trị',
            'giá trị cốt lõi',
            'core value',
        ])
    ) {
        reply =
            '💎 Giá trị cốt lõi\n\n' +
            knowledge.company.values
                .map((item) => `• ${item}`)
                .join('\n');
    }

    // =========================
    // ĐỘI NGŨ
    // =========================

    else if (
        contains(text, [
            'đội ngũ',
            'team',
            'thành viên',
            'nhân sự',
        ])
    ) {
        reply =
            '👥 Đội ngũ EGGPORCE\n\n' +
            knowledge.founders
                .map(
                    (item) =>
                        `👤 ${item.name}\n🏷️ ${item.role}`
                )
                .join('\n\n');
    }

    // =========================
    // SẢN PHẨM
    // =========================

    else if (
        contains(text, [
            'sản phẩm',
            'bán gì',
            'mặt hàng',
            'có gì',
        ])
    ) {
        reply =
            '🛍️ Danh sách sản phẩm EGGPORCE\n\n' +
            knowledge.products
                .map(
                    (item) =>
                        `📦 ${item.name}\n💰 ${item.price}`
                )
                .join('\n\n');
    }

    // =========================
    // GIÁ
    // =========================

    else if (
        contains(text, [
            'giá',
            'bao nhiêu',
            'bao nhiêu tiền',
        ])
    ) {
        reply =
            '💰 Bảng giá sản phẩm\n\n' +
            knowledge.products
                .map(
                    (item) =>
                        `📦 ${item.name}: ${item.price}`
                )
                .join('\n');
    }

    // =========================
    // THÀNH TỰU
    // =========================

    else if (
        contains(text, [
            'thành tựu',
            'giải thưởng',
            'đạt được',
        ])
    ) {
        reply =
            '🏆 Thành tựu nổi bật\n\n' +
            knowledge.achievements
                .map((item) => `• ${item}`)
                .join('\n');
    }

    // =========================
    // LIÊN HỆ
    // =========================

    else if (
        contains(text, [
            'liên hệ',
            'facebook',
            'email',
            'fanpage',
        ])
    ) {
        reply = `
📞 Liên hệ

Vui lòng liên hệ EGGPORCE qua fanpage hoặc website chính thức để được hỗ trợ.
`;
    }

    // =========================
    // MẶC ĐỊNH
    // =========================

    else {
        reply = `
🤖 Xin lỗi, tôi chưa hiểu câu hỏi.

Bạn có thể hỏi:

• EGGPORCE là gì?
• CEO là ai?
• CMO là ai?
• Đội ngũ EGGPORCE
• Sản phẩm của EGGPORCE
• Giá sản phẩm
• Thành tựu của EGGPORCE
• Chất liệu sản phẩm
`;
    }

    return Response.json({ reply });
}

