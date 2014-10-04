from zn_group import ZnGroup
import unittest


class TestZnGroup(unittest.TestCase):

    def setUp(self):
        self.zn3 = ZnGroup(3)

    def testIdentityElementIsZero(self):
        self.assertEqual(0, self.zn3.get_identity())

    def testIdentityElementUnderOperation(self):
        self.assertEqual(2, self.zn3.operation(2, self.zn3.get_identity()))

    def testGetElementsOfAGroup(self):
        self.assertEqual([0, 1, 2], self.zn3.get_elements())

    def testGetElementsOfZn10(self):
        zn10 = ZnGroup(10)
        self.assertEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], zn10.get_elements())

    def testOperationInZn3(self):
        self.assertEqual(0, self.zn3.operation(1, 2))

    def testInverseOf1InZn3(self):
        self.assertEqual(1, self.zn3.inverse_of(2))

    def testCayleyTableOfZn3(self):
        result = [[0, 1, 2], [1, 2, 0], [2, 0, 1]]

        self.assertEqual(result, self.zn3.cayley_table())

    def testExponentOfMemberOfZn6(self):
        zn6 = ZnGroup(6)
        self.assertEqual(0, zn6.exponent(2, 0))
        self.assertEqual(2, zn6.exponent(2, 1))
        self.assertEqual(0, zn6.exponent(2, 3))
        self.assertEqual(2, zn6.exponent(2, 4))

    def testGenerateFromOfMemberOfZn6(self):
        zn6 = ZnGroup(6)
        self.assertEqual(set([0, 2, 4]), zn6.generate_from(2))

if __name__ == '__main__':
    unittest.main()
