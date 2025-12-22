import * as icons from 'lucide-react';

const usedIcons = [
    'Calendar', 'Stethoscope', 'Smile',
    'ShieldAlert', 'TrendingUp', 'CheckCircle2', 'Star', 'ArrowRight', 'Wallet', 'Users', 'Globe',
    'FileText', 'UserCheck', 'ShieldCheck', 'CreditCard',
    'CheckCircle',
    'Heart', 'Clock',
    'Activity', 'Sparkles',
    'MapPin', 'Phone', 'Mail', 'Facebook', 'Twitter', 'Instagram', 'Linkedin'
];

console.log('Checking icons...');
usedIcons.forEach(name => {
    if (!icons[name]) console.error(`MISSING ICON: ${name}`);
});
console.log('Check complete.');
