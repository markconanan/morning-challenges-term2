class Array
  def initialize(array)
    @array=array
  end
  def square
    @square=[]
    for number in @array do
      @square.push(number**2)
    end
  end
  def cube
    @cube=[]
    for number in @array do
      @cube.push(number**3)
    end
  end
  # def average
  #   @average=(@array.sum)/(@array.length)
  # end
  # def sum
  #   @sum=@array.inject { |sum,n| sum + n }
  # end

  # now fill in the rest
end