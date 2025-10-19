# Digital Library — واجهة مكتبة رقمية

واجهة مبنية بـ Vue 3 + Tailwind CSS لعرض مواد مركز دراسات المرأة والطفل. تشمل ميزات حديثة: تصميم شبكي، بحث، صفحات أقسام وتفاصيل، dark mode، drawer للهاتف، وتأثيرات حركة لطيفة.

## تشغيل محلي

افتح PowerShell في مجلد المشروع ثم:

```powershell
npm install
npm run dev
```

ثم افتح المتصفح على العنوان الذي يعطيه Vite (عادة http://localhost:5173).

## ميزات مضافة

- تصميم حديث مستوحى من الشبكات: بطاقات، تدرجات لونية، glass effect.
- دعم Dark/Light واحتفاظ بالاختيار في `localStorage`.
- Drawer للقائمة على الجوال.
- صفحة نتائج البحث (`/search?q=...`).
- تأثيرات دخول وبطاقات متحركة عند التمرير باستخدام IntersectionObserver.

## نشر إلى GitHub Pages (اختياري)

يمكنك استخدام GitHub Actions أو gh-pages لنشر النسخة الثابتة. باختصار:

```powershell
npm run build
# ثم انشر محتويات dist على استضافة ثابتة
```

## ملاحظات للمطور

- يمكن ربط الواجهات بواجهة API حقيقية لاسترجاع المواد الحقيقية.
- تم استخدام Pinia لإدارة حالة صغيرة (drawer, dark mode).

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
