var temp = [10,20,30,11,12,34,56,17,13,56,35]
function getMax (T_data) 
{
  let max = T_data[0]
  for (let i = 1; i < T_data.length; i++) 
  {
    if (T_data[i] > max)
     {
      max = T_data[i]
    }
  }
  return max
}
function getMin (T_data)
 {
  let min = T_data[0]
  for (let i = 1; i < T_data.length; i++)
   {
    if (T_data[i] < min)
     {
      min = data[i]
    }
  }
  return min
}
function getMean (T_data)
 {
  let sum = 0
  for (let i = 0; i < T_data.length; i++)
   {
    sum += T_data[i]
  }
  return (sum / T_data.length).toFixed(3)
}
function getMode (T_data) 
{
  let mode = 0; let maxCount = 0; let i; let j
  for (i = 0; i < T_data.length; ++i)
   {
    let count = 0
    for (j = 0; j < T_data.length; ++j) 
    {
      if (T_data[j] === T_data[i])
       {
        ++count
      }
    }
    if (count > maxCount) 
    {
      maxCount = count
      mode = T_data[i]
    }
  }
  return mode
}

let maxTemp = getMax(temp)
let minTemp = getMin(temp)
let mean = getMean(temp)
let mode = getMode(temp)

console.log('Maximum_Temperature=' + maxTemp + 
'\t Minimum_Temperature=' + minTemp + '\t Mean of Temperature=' 
+ mean + '\t Mode of Temperature=' + mode)
