function generateSlug(str) {ng
    let slug = str.trim().toLowerCase();
    slug = slug.replace(/\s+/g, '-');
    slug = slug.replace(/[^a-z0-9-]/g, '');
    slug = slug.replace(/-+/g, '-');
    slug = slug.replace(/^-+|-+$/g, '');
    
    return slug;
}
console.log(generateSlug(" Javascript Cho Người Mới Bắt Đầu! "));
