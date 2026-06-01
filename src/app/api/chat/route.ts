import knowledge from '@/data/knowledge';

function contains(text: string, keywords: string[]) {
    return keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
    );
}

export async function POST(req: Request) {
    const { message } = await req.json();

    const text = message.toLowerCase().trim();

    let reply = '';

    // =========================
    // TÌM THÀNH VIÊN THEO TÊN
    // =========================

    const founder = knowledge.founders?.find(
        (person) =>
            text.includes(person.name.toLowerCase()) ||
            text.includes(person.role.toLowerCase())
    );

    if (founder) {
        reply = `
${founder.name}
${founder.role}

${founder.description}
`;

        return Response.json({ reply });
    }

    // =========================
    // TÌM SẢN PHẨM THEO TÊN
    // =========================

    const product = knowledge.products?.find(
        (item) =>
            text.includes(item.name.toLowerCase())
    );

    if (product) {
        reply = `
${product.name}

Danh mục: ${product.category}
Giá bán: ${product.price}

${product.description || ''}
`;

        return Response.json({ reply });
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
            'sản phẩm được làm từ gì',
        ])
    ) {
        reply = knowledge.company.material;
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
${knowledge.company.name}

${knowledge.company.description}

Slogan:
${knowledge.company.slogan}
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
        reply = knowledge.company.mission;
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
        reply = knowledge.company.vision;
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
        reply = knowledge.company.values.join('\n• ');
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
        reply = knowledge.founders
            .map(
                (item) =>
                    `• ${item.name} - ${item.role}`
            )
            .join('\n');
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
        reply = knowledge.products
            .map(
                (item) =>
                    `• ${item.name} - ${item.price}`
            )
            .join('\n');
    }

    // =========================
    // GIÁ
    // =========================

    else if (
        contains(text, [
            'giá',
            'bao nhiêu tiền',
            'bao nhiêu',
        ])
    ) {
        reply = knowledge.products
            .map(
                (item) =>
                    `${item.name}: ${item.price}`
            )
            .join('\n');
    }

    // =========================
    // THÀNH TỰU
    // =========================

    else if (
        contains(text, [
            'thành tựu',
            'đạt được',
            'achievement',
            'giải thưởng',
        ])
    ) {
        reply = knowledge.achievements
            .map((item) => `• ${item}`)
            .join('\n');
    }

    // =========================
    // LIÊN HỆ
    // =========================

    else if (
        contains(text, [
            'liên hệ',
            'email',
            'facebook',
            'fanpage',
            'số điện thoại',
        ])
    ) {
        reply = `
Liên hệ EGGPORCE qua các kênh chính thức trên website hoặc fanpage của dự án.
`;
    }

    // =========================
    // MẶC ĐỊNH
    // =========================

    else {
        reply = `
Xin lỗi, tôi chưa hiểu câu hỏi.

Bạn có thể hỏi về:

• EGGPORCE là gì?
• Sản phẩm của EGGPORCE
• Giá sản phẩm
• Đội ngũ sáng lập
• Thành tựu
• Chất liệu sản phẩm
• Sứ mệnh
• Tầm nhìn
`;
    }

    return Response.json({
        reply,
    });
}