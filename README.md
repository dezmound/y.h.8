# README
[Heroku](https://shri-h-8.herokuapp.com/)

При запросе определяется `user-agent` устройства, если `mobile || tablet`, то отдается `mobile.min.(js|css)` бандлы, инче `desktop.min.(js|css)`.    

Так как страница изначально была адаптиной, то наверное, было бы неплохо оставить возможность на `desktop` изменять размер окна. Но я решил `@media` выражения для мобильных устройств вынести в `mobile.bundle`, чтобы как то опровдать его добавление в проект.

Общие блоки для `desktop` и `mobile`:
```
common.blocks/
├── card // блок карточка
│   ├── __actions
│   │   ├── _bottom
│   │   │   └── card__actions_bottom.css
│   │   ├── card__actions.bemtree.js
│   │   ├── card__actions.css
│   │   └── card__actions.deps.js
│   ├── __actions-wrapper
│   │   └── card__actions-wrapper.css
│   ├── card.bemtree.js
│   ├── card.css
│   ├── card.deps.js
│   ├── __channel
│   │   ├── card__channel.bemtree.js
│   │   └── card__channel.css
│   ├── __description
│   │   └── card__description.css
│   ├── __like
│   │   └── card__like.css
│   └── __more
│       └── card__more.css
├── container // блок контейнер
│   └── container.bemtree.js
├── grid // блок сетка
│   ├── __card
│   │   ├── _description
│   │   │   └── grid__card_description_no.bemtree.js
│   │   ├── grid__card.bemtree.js
│   │   ├── grid__card.css
│   │   ├── grid__card.deps.js
│   │   └── _size
│   │       ├── grid__card_size_l.css
│   │       ├── grid__card_size_m.css
│   │       └── grid__card_size_s.css
│   ├── grid.bemtree.js
│   ├── grid.css
│   └── grid.deps.js
├── like // блок лайк
│   ├── Heart.svg
│   └── like.css
├── logo // блок лого
│   ├── logo.bemtree.js
│   ├── logo.css
│   └── logo.deps.js
├── more // блок еще
│   ├── Actions.svg
│   └── more.css
├── page // блок page
│   ├── page.bemtree.js
│   ├── page.deps.js
│   └── _view
│       ├── page_view_404.bemtree.js
│       └── page_view_404.post.css
└── root
    ├── root.bemtree.js
    └── root.deps.js
```
Блоки для `desktop`:    
```
desktop.blocks/
├── grid
│   └── grid.css
├── like
│   └── like.css
├── logo
│   └── logo.css
├── more
│   └── more.css
└── root
    └── root.bemtree.js
```
Блоки для `mobile`:
```
mobile.blocks/
├── grid
│   ├── __card
│   │   └── _size
│   │       ├── grid__card_size_l.css
│   │       ├── grid__card_size_m.css
│   │       └── grid__card_size_s.css
│   └── grid.css
├── logo
│   └── logo.css
└── root
    └── root.bemtree.js
```
