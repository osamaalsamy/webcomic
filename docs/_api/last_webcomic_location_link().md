---
title: last_webcomic_location_link()
permalink: last_webcomic_location_link()
---

> Display a link to the last comic location.

```php
last_webcomic_location_link( string $link = '%title &raquo;', mixed $term = null, array $args = [], mixed $post = null, array $post_args = [] ) : void
```

## Parameters

### `string` $link
Optional link text, like before\{\{text}}after.

### `mixed` $term
Optional reference term.

### `array` $args
Optional arguments.

### `mixed` $post
Optional reference post.

### `array` $post_args
Optional post arguments.

## Return

`void`

## Uses
- [get_webcomic_location_link()](get_webcomic_location_link())  
The relation argument is always set to
`last`.