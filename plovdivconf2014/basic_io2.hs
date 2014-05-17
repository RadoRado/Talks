import System.Random

randomRange :: Random a => a -> a -> IO a
randomRange a b = getStdRandom (randomR (a,b))

main :: IO ()
main = do
    name <- getLine
    putStrLn ( "Hello, " ++ name )
    randomNumber <- randomRange 1 10 :: (IO Int)
    let squareRandom = randomNumber * randomNumber
    putStrLn $ "Your lucky number is : " ++ (show randomNumber)
    putStrLn $ "And the square is : " ++ (show squareRandom)
