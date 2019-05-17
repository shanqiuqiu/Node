-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-05-17 15:30:05
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL DEFAULT '',
  `author` varchar(20) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `posttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hit` int(10) NOT NULL DEFAULT '0',
  `status` smallint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `author`, `content`, `posttime`, `hit`, `status`) VALUES
(1, 'Node开发', '大萌&山丘', 'Node开发教程学习', '2018-11-22 07:03:37', 0, 0),
(2, 'Vue学习（一）', '山丘', 'Vue开发教程学习', '2018-11-22 07:04:39', 1, 0),
(3, 'Vue学习（二）', '山丘', '加油', '2018-11-22 07:04:55', 2, 0),
(4, 'Vue学习（三）', '山丘', 'vue教程', '2018-11-22 07:05:10', 4, 0),
(5, 'Vue学习（四）', '山丘', '9784566556415', '2018-11-22 07:05:28', 20, 0),
(6, '山丘到此一游', '山丘', '山丘到此一游山丘到此一游山丘到此一游山丘到此一游', '2018-11-22 07:06:02', 13, 0),
(9, '测试10', 'dameng', '123456', '2018-11-26 06:31:58', 0, 0),
(12, '山丘到此一游', '山丘', '0000000000', '2018-11-26 06:32:53', 0, 1),
(23, 'test', '84894', '45*95*', '2019-05-14 07:24:25', 0, 1);

-- --------------------------------------------------------

--
-- 表的结构 `author`
--

CREATE TABLE IF NOT EXISTS `author` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `authorname` varchar(20) NOT NULL DEFAULT '',
  `authorpassword` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `author`
--

INSERT INTO `author` (`id`, `authorname`, `authorpassword`) VALUES
(1, 'dameng', '19910419'),
(2, 'shanqiu', '20001101');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
