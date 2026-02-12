for(let i=1;i<=5;i++){
    console.log(i)
}

for(let i=1;i<=5;i++){
    console.log(i)
    if(i==3){        
        break
    }
}
// 1 2 3


for(let i=1;i<=5;i++){
    console.log(i)
    if(i==3){        
        continue
    }
}
// 1 2 3  4 5

for(let i=1;i<=5;i++){
    
    if(i==3){        
        continue
    }
    console.log(i)
}
// 1 2 4 5

for(let i=1;i<=5;i++){
    
    if(i==3){        
        break
    }
    console.log(i)
}
// 1 2 

