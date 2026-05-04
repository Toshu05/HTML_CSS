#include<iostream>
#include<vector>
#include<math.h>
#include<algorithm>
using namespace std;
int main()
{
  
        vector<int> nums={1,2,2,2,1,2,1};
        sort(nums.begin(),nums.end());
        int n=nums.size();
        int count=0,f_val;
        for(int i=0;i<(n-1);i++)
        {
            if(nums[i]==nums[i-1])
            {
                count++;
            }
            else
            {
                if(count>(n/2))
                {
                    f_val=nums[i];
                    break;
                }

            }
        }
        cout<<f_val;
        return 0;
  return 0;
}