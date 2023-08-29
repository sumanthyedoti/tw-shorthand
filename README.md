## Tailwind Shorthand
A Tailwind shorthand plugin to be kind on line length.

This plugin was born out of a little frustration from long growing lines
because of the lovely tailwind utility classes. This is an attempt to make the utilities short and handy, a *tailwind shorthand*.

## Benefits
- Shorter line length, less to type, more visibility
- Better semantics with CSS properties
- ~30% reduction in total class-names size (not claiming any performance gains :D)
## Disadvantages
- Reduces readability. *Enough reason not to use this.*
- One more abstraction over tailwind

## Install
```
npm install tw-shorthand@beta
```
- add as tailwind plugin in `tailwind.config.js`
```
const shorthand = require('tw-shorthand')

export default {
  ...
  plugins: [shorthand],
}
```
----

## The shorthand classes
### pseudo-classes
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `hover:` | `h:` |
| `active` | `a:` |
| `focus:` | `f:` |
| `visited:` | `v:` |
| `link:` | `l:` |
| `checked:` | `c:` |
| `disabled:` | `d:` |
| `target:` | `t:` |
| `empty:` | `e:` |
| `optional:` | `o:` |
| `first-of-type:` | `fot:` |
| `last-of-type:` | `lot:` |
| `last-of-type:` | `oot:` |
| `only-child:` | `oc:` |
### `aspect-ratio`
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `aspect-auto` | `ar-au` |
| `aspect-sqaure` | `ar-1/1` |
| `aspect-video` | `ar-16/9` |
|               | `ar-9/16` |
|               | `ar-3/2` |
|               | `ar-2/3` |
|               | `ar-5/4` |
|               | `ar-4/5` |
### flex-direction
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `flex-row`        | `f-r`     |
| `flex-row-reverse`        | `f-rr`     |
| `flex-col`        | `f-c`     |
| `flex-col-reverse`        | `f-cr`     |
### flex-basis
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `basis-..`        | `f-b-..`     |
### flex
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `flex-`          | `f-1`    |
| `flex-auto`      | `f-au`   |
| `flex-initial`   | `f-in`   |
| `flex-none`      | `f-no`   |
### flex-grow
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `grow`          | `f-g-1`    |
| `grow-0`      | `f-g-0`   |
### flex-shrink
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `shrink`          | `f-s-1`    |
| `shrink-0`      | `f-s-0`   |
### flex-wrap
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `flex-wrap`          | `f-w`    |
| `flex-wrap-reverse`          | `f-w-r`    |
| `flex-nowrap`          | `f-w-no`    |
### order
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `oder-..`          | `ord-..`    |
### justify-content
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `justify-normal`          | `jc-nl`    |
| `justify-start`          | `jc-s`    |
| `justify-end`          | `jc-e`    |
| `justify-center`          | `jc-c`    |
| `justify-between`          | `jc-w`    |
| `justify-around`          | `jc-a`    |
| `justify-evenly`          | `jc-v`    |
| `justify-stretch`          | `jc-tt`    |
### align-item
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `items-start`          | `ai-s`    |
| `items-end`          | `ai-e`    |
| `items-center`          | `ai-c`    |
| `items-baseline`          | `ai-bl`    |
| `items-stretch`          | `ai-t5t`    |


### grid-template-columns
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `grid-cols-..`          | `g-tc-..`    |
### grid-template-rows
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `grid-rows-..`          | `g-tr-..`    |
### grid-column
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `col-span-1`          | `g-c-1/1`    |
| `col-span-2`          | `g-c-2/2`    |
| ... | ... |
### grid-column-start
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `col-start-1`          | `g-cs-1`    |
| `col-start-2`          | `g-cs-2`    |
| ... | ... |
### grid-column-end
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `col-end-1`          | `g-ce-1`    |
| `col-end-2`          | `g-ce-2`    |
| ... | ... |
### grid-row
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `row-span-1`          | `g-c-1/1`    |
| `row-span-2`          | `g-c-2/2`    |
| ... | ... |
### grid-row-start
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `row-start-1`          | `g-cs-1`    |
| `row-start-2`          | `g-cs-2`    |
| ... | ... |
### grid-row-end
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `row-end-1`          | `g-ce-1`    |
| `row-end-2`          | `g-ce-2`    |
| ... | ... |

### opacity
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `opacity-{value}`        | `o-{value}`     |
### color
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `text-{value}`  | `c-{value}` |
### object-position
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `object-{value}`  | `ob-{value}` |
### line-height
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `leading-{value}`  | `lh-{value}` |
### letter-spacing
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `tracking-{value}`  | `ls-{value}` |
### columns
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `columns-{value}`  | `cols-{value}` |
### box-decoration-break
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `box-decoration-clone`  | `box-decor-cl` |
| `box-decoration-slice`  | `box-decor-sl` |
### box-sizing
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `box-border`  | `box-z-b` |
| `box-content`  | `box-z-c` |
### text-align
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `text-{value}`  | `t-{value}` |
### text-overflow
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `text-ellipsis`  | `t-ellipsis` |
| `text-clip`  | `t-ellipsis` |
### text-transform
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `uppercase`  | `tt-up` |
| `lowercase`  | `tt-low` |
| `capitalize`  | `tt-cap` |
| `normal-case`  | `tt-no` |
### pointer-events
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `pointer-events-none`  | `p-e-no` |
| `pointer-events-auto`  | `p-e-au` |
### border-width
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `border-{value}`  | `bow-{value}` |
### border-color
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `border-{value}`  | `boc-{value}` |
### border-radius
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `border-{value}`  | `bor-{value}` |
### border-style
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `border-solid`  | `bos-sol` |
| `border-dashed`  | `bos-dash` |
| `border-dotted`  | `bos-dot` |
| `border-double`  | `bos-dbl` |
| `border-hidden`  | `bos-hid` |
| `border-none`  | `bos-no` |
### outline-color
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `outline-{value}`  | `olc-{value}` |
### outline-width
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `outline-{value}`  | `olw-{value}` |
### outline-style
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `outline-solid`  | `ols-sol` |
| `outline-dashed`  | `ols-dash` |
| `outline-dotted`  | `ols-dot` |
| `outline-double`  | `ols-dbl` |
| `outline-hidden`  | `ols-hid` |
| `outline-none`  | `ols-no` |
### font-weight
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `font-{value}`  | `fw-{value}` |
### font-size
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `font-{value}`  | `fz-{value}` |
### display
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `block` | `d-b` |
| `inline-block` | `d-ib` |
| `inline` | `d-i` |
| `flex` | `d-f` |
| `inline-flex` | `d-if` |
| `table` | `d-t` |
| `inline-table` | `d-it` |
| `table-caption` | `d-t-cp` |
| `table-cell` | `d-t-cl` |
| `table-column` | `d-t-c` |
| `table-column-group` | `d-t-c-g` |
| `table-footer-group` | `d-t-ft-g` |
| `table-header-group` | `d-t-hd-g` |
| `table-row` | `d-t-r` |
| `table-row-group` | `d-t-r-g` |
| `flow-root` | `d-fw-rt` |
| `grid` | `d-g` |
| `inline-grid` | `d-ig` |
| `contents` | `d-c` |
| `list-item` | `d-li` |
| `none` | `d-no` |
### box positions
- `background-position`
- `object-position`

| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `bg-center` | `bg-c` |
| `bg-top` | `bg-t` |
| `bg-bottom` | `bg-b` |
| `bg-left` | `bg-l` |
| `bg-right` | `bg-r` |
| `bg-left top` | `bg-lt` |
| `bg-left bottom` | `bg-lb` |
| `bg-right top` | `bg-rt` |
| `bg-right bottom` | `bg-rb` |
### object-fit
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `fit-contain` | `ob-c` |
| `fit-cover` | `ob-v` |
| `fit-fill` | `ob-f` |
| `fit-none` | `ob-n` |
| `fit-scale-down` | `ob-sd` |
### overflow
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `overflow-auto` | `ov-au` |
| `overflow-hidden` | `ov-h` |
| `overflow-clip` | `ov-c` |
| `overflow-visible` | `ov-v` |
| `overflow-scroll` | `ov-s` |
| `overflow-x-{value}` | `ov-x-{value}` |
| `overflow-y-{value}` | `ov-y-{value}` |
### `transform: scale[X/Y]()`
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `scale-..` | `tr-s-..` |
### `transform: rotate()`
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `rotate-..` | `tr-r-..` |
### `transform-orign`
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `origin-..` | `tr-o-..` |
### `transform: translateX/Y()`
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `translate-..` | `tr-tr-..` |
### `transform: skewX/Y`
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `skew-..` | `tr-sk-..` |


## Tailwind Specific
### Transition Property
| Tailwind                 | Shorthand       |
|--------------------------|-----------------|
| `transition-none`             | `tr-no`    |
| `transition-all`             | `tr-all`    |
| `transition`             | `tr`            |
| `transition-colors`       | `tr-c`   |
| `transition-opacity`       | `tr-o`  |
| `transition-shadow`       | `tr-sh`  |
| `transition-transform`     | `tr-tf` |
