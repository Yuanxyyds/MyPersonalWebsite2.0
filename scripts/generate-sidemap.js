const fs = require('fs');
const { create } = require('xmlbuilder2');

const baseUrl = 'https://www.liustev6.ca';

const urlset = create({ version: '1.0' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
});

const routes = [
    '/',
    '/project',
    '/resume',
    '/server',
    '/campusEats',
    '/landSink',
    '/foodImageClassify',
    '/stevenAI',
    '/mentorAI',
];


const routeMeta = {
    '/': { priority: 1.0, changefreq: 'weekly' },
    '/project': { priority: 0.9, changefreq: 'monthly' },
    '/server': { priority: 0.9, changefreq: 'monthly' },
    '/campusEats': { priority: 0.8, changefreq: 'monthly' },
    '/resume': { priority: 0.7, changefreq: 'monthly' },
    '/landSink': { priority: 0.5, changefreq: 'monthly' },
    '/foodImageClassify': { priority: 0.5, changefreq: 'monthly' },
    '/stevenAI': { priority: 0.5, changefreq: 'monthly' },
    '/mentorAI': { priority: 0.5, changefreq: 'monthly' },
};

routes.forEach(route => {
    const meta = routeMeta[route] || {};
    const url = urlset.ele('url');
    url.ele('loc').txt(baseUrl + route);
    url.ele('lastmod').txt(new Date().toISOString());
    if (meta.changefreq) url.ele('changefreq').txt(meta.changefreq);
    if (meta.priority) url.ele('priority').txt(meta.priority.toString());
});


const xml = urlset.end({ prettyPrint: true });
fs.writeFileSync('../public/sitemap.xml', xml);

console.log('✅ Sitemap generated successfully!');
