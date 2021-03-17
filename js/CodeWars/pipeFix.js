function pipeFix(numbers){

}

Test.describe('Fixed Tests', _ => {
    Test.it("Tests", __ => {
      Test.assertDeepEquals(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
      Test.assertDeepEquals(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
      Test.assertDeepEquals(pipeFix([6,9]),[6,7,8,9]);
      Test.assertDeepEquals(pipeFix([-1,4]),[-1,0,1,2,3,4]);
      Test.assertDeepEquals(pipeFix([1,2,3]),[1,2,3]);
    });
  });