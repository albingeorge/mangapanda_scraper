# Scrape mangapanda

Pass the initial url to a manga page(eg: http://www.mangapanda.com/93-1-1/naruto/chapter-1.html)

## Endpoints
"/scrape"

Body:

```
{
    "intial_url": "http://www.mangapanda.com/93-1-1/naruto/chapter-1.html",
    "name": "naruto"
}
```

This scrapes the whole manga and places them in the directory "/downloads/naruto"

The structure will be as follows:

```downloads
    naruto
        1
            1.jpg
            2.jpg
            .
            .
        2
            1.jpg
```

This also stores all the data that is collected in a mongodb
