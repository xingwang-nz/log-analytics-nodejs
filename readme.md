### Prerequisite 

Node 12 higher



### Package Install

```
# under proecjt root
npm install
```



### Run

```bash
# under project root, run the index.js
node index.js <log_file_path>

# e.g 
node index.js  programming-task-example-data.log


# sample output

----------------------------------------------------------
-----------------------------------------------------------
The number of unique IP addresses: 11
The top 3 most active IP addresses: [
  { visited: 4, fields: [ '168.41.191.40' ] },
  {
    visited: 3,
    fields: [ '177.71.128.21', '50.112.00.11', '72.44.32.10' ]
  },
  {
    visited: 2,
    fields: [ '168.41.191.9', '168.41.191.34', '168.41.191.43' ]
  }
]
The top 3 most visited URLs: [
  { visited: 2, fields: [ '/docs/manage-websites/' ] },
  {
    visited: 1,
    fields: [
      '/intranet-analytics/',
      'http://example.net/faq/',
      '/this/page/does/not/exist/',
      'http://example.net/blog/category/meta/',
      '/blog/2018/08/survey-your-opinion-matters/',
      '/docs/manage-users/',
      '/blog/category/community/',
      '/faq/',
      '/faq/how-to-install/',
      '/asset.js',
      '/to-an-error',
      '/',
      '/docs/',
      '/moved-permanently',
      '/temp-redirect',
      '/faq/how-to/',
      '/translations/',
      '/newsletter/',
      '/hosting/',
      '/download/counter/',
      '/asset.css'
    ]
  }
]
-----------------------------------------------------------
----------------------------------------------------------

```

