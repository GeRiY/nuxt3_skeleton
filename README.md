## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

## Environment init
- create .env.local from env file in root directory
- set config in nuxt.config.tx file
```js
{
    runtimeConfig: {
        // Will be available in both server and client
        public: {
            baseUrl: process.env.BASE_URL
        }
    }
}
```


## Modules:

### Mixin
- are accessable in all components and pages and layouts
- used to share common logic between components
### Store
- are accessable in everywhere with this.$store or $store
```js
// get state value 
this.$store.state.stateName

// use mutation function
this.$store.commit('storeName/mutationName', payload)

// use action function
this.$store.dispatch('storeName/actionName', payload)

// use getter function
this.$store.getters['storeName/getterName']
```
### I18n
- are accessable in everywhere with this.$i18n or $i18n
```js
// get locale
this.$i18n.locale

// change locale
this.$i18n.locale = 'en'

// get message
this.$t('message.hello')

// in component template
{{ $t('message.hello') }}

// get message with params
this.$t('message.hello', { name: 'John' })

// get message with pluralization
this.$tc('message.plural', 2)
```