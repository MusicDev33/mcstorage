import * as cwl from './cwl';
import * as cwr from './cwr';
import * as rwl from './rwl';
import * as rwr from './rwr';
import * as lwl from './lwl';
import * as lwr from './lwr';

const sides = [
  {data: cwl, wing: 'center', side: 'left'}, 
  {data: cwr, wing: 'center', side: 'right'},
  {data: rwl, wing: 'right', side: 'left'},
  {data: rwr, wing: 'right', side: 'right'},
  {data: lwl, wing: 'left', side: 'left'},
  {data: lwr, wing: 'left', side: 'right'},
];

const data = [];

for (let side of sides) {
  for (let key in side.data) {
    const pod = key.split('pod')[1];
    
    for (let item of side.data[key]) {
      const itemData = {
        pod,
        item,
        wing: side.wing,
        side: side.side
      }

      data.push(itemData);
    }
  }
}

console.log(data);

export { data };
