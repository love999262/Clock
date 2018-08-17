### A simple plugin of clock,support dial mode and digital mode.

- API

| key                  | value                            | description  |
| -------------------- |:--------------------------------:| ------------:|
| selector             | '.clock'                         | the root node
| type                 | 'dial'/'digital'                 | mode type
| renderType           | 'css'/'canvas'                   | render type
| color                | '#fff'/'rgba(255,255,255,1)'     | the stroke color
| bgColor              | '#fff'/'rgba(255,255,255,1)'     | the bgcolor
| dial.hasTimeLabel    | true/false                       | set TimeLabel
| dial.hasTimeLabel    | true/false                       | set broder   
| digital              | object                           | digital config       
| digital.fontSize     | 12                               | fontsize of digital         

```javascript
const clock = new Clock({
    selector: '.clock',
    type: 'dial',
    renderType: 'css',
    color: '#fff',
    bgColor: 'rgba(0, 0, 0, .35)',
    dial: {
        hasTimeLabel: true,
        hasBorder: true,
    },
    digital: {
        fontSize: 12,
    },
}); 
```
- TODO List
 - canvas mode
 - <del>timelabel mode</del>
 - show week and month
 - performance optimization
 - draggale

- if you want to controbute code view [build](./build.md)