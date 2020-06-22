#!/bin/bash                                                                             

for x in `seq $1`;                                                              
do                                                                              
        touch $x.js                                                                 
done                                                                            
echo "檔案建立完成";
