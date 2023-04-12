import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchName: any) {
  
    // if (!value) return [];
    // if (value === " ") return [];
    // if (!searchName) return value;
    // //if (!searchGender) return value;
  
    // // if(value.length === 0 || !searchName   ){
    // //   return value;
    // // }
    // const users = [];
    // for(const user of value)
    // if(user['first_name'].toLowerCase().includes(searchName.toLowerCase() ) || 
    // user['last_name'].toLowerCase().includes(searchName.toLowerCase()) 
    // //user['gender'] === searchGender
    // ){
    //   users.push(user)
    // }
    // return users;

  }

  // transform(items: any[], searchText: string,searchGender:string) {
  //   if (!items) return [];
  //   if (!searchText) return items;

  
  //   return items.filter(item => {
  //     return Object.keys(item).some(key => {
      
  //        return String(item[key]).toLowerCase().includes(searchText.toLowerCase())
  //        //String(item[key]).toLowerCase().includes(searchGender.toLowerCase())
         

           
  //     });

      
  //   });
  


  //  }
}
