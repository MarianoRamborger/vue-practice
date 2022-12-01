import { evenOrOdd, multiply } from "@/playground";

//prettier-ignore
//? Describe has no functional meaning, but allows us to describe what we are going to test
describe("Basic Math", () => {
  it("Adds two numbers", () => { //? What you are specifically testing
    expect(1 + 1,) //? An expression or evaluation 
    .toBe(2) //? What we expect the result to be. Doesn't need to be exactly the same, there are methods for greater and lower and stuff
  }) 

  it("substracts two number", ()=>{ //? Can have multiple tests per test suit
    expect(5-1).toBeLessThan(5) //? And multiple expects per it
    expect(3+1).toBeLessThan(5)
  })
  

  describe("Even or odd", ()=> {//?describes can be nested
    it("Tests even or odd", ()=> {
      expect(evenOrOdd(4)).toBe("even")
      expect(evenOrOdd(3)).toBe("odd")
    })

  })
  
  describe("Multiply", () => { //? This is Test-driven-development, as the test was written without the function. It will fail, of course.
    it("Multiply two numbers together", ()=> { //? Then we write the function, and if it passes the test, we know it's working as intended
      expect(multiply(2,2)).toBe(4)
    })
  })

  


})
