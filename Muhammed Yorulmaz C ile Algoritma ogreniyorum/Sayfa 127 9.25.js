let t = Number(10000);
let k = Number(20000);
let sum_t =0;
let sum_k =0;
let t_yarin= Number(0);

let k_yarin= Number(0);

for(i=1; i<=100; i++) { 

t_yarin =( (1.01) * ( t) ) - ((0.00001) * (t) *  (k));
t = t_yarin;


document.write("<br>" + Math.ceil(t_yarin));

k_yarin = ((0.995) * (k) ) + (0.00001 * 0.01 * (k) *  (k))
k = k_yarin

}


