function chunk(list,step){
    if(step<=list.length){
        const result = []
        let temp = [];
        for(let i=0;i<list.length;i=i+step){
            for(j = i; j<step+i;j++){
                if(j<list.length){
                    temp.push(list[j]);
                }
            }
            result.push(temp);
            temp = [];
        }
        return result;
    }
    return list;
}