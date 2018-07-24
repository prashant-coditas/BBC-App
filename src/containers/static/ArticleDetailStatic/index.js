import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ScrollView,
  WebView,
  Dimensions
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import HTML from 'react-native-render-html';

let html = "<style>body{background-color:#fff}figure,img{max-width:100%;height:auto;}figure{-webkit-margin-start:auto;-webkit-margin-end:auto;}</style><p>Find people with high expectations and a low tolerance for excuses. They&#8217;ll have higher expectations for you than you have for yourself. Don&#8217;t flatter yourself that this has much to do with you &#8211; this is just who they are. Don&#8217;t look for &#8220;nice&#8221; in these relationships. Look for trust.</p>\n<p>Beauty Dust is very pretty to look at and it tastes like nothing, which is great. Here is what it&#8217;s supposed to do: This ancient empiric formula expands beauty through alchemizing elements legendary for their youth preserving, fortifying and tonifying qualities. Glowing supple skin, lustrous shiny hair and twinkling bright eyes are holistically bestowed from the inside out.</p>\n<figure id=\"attachment_13\" style=\"width: 1068px\" class=\"wp-caption alignleft\"><a><img class=\" td-modal-image wp-image-13 size-full\" src=\"http://demo.gikapp.com/wp-content/uploads/2017/08/p1.jpg\" width=\"1068\" height=\"713\" /></a><figcaption class=\"wp-caption-text\">Girls shoping and having fun</figcaption></figure>\n<p>I actually first read this as alkalizing meaning effecting pH level, and I was like, OK I guess I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research each ingredient because I know alchemy is not actually happening in my body when I eat this, since alchemy is not real.</p>\n<p>That&#8217;s all I&#8217;ve got &amp; it&#8217;s nothing new. But my gratitude and holiday weekend survival tactics kept bringing me back to these people &#8211; so thankful for them in all areas of my life, and our history &amp; future together.</p>\n<figure id=\"attachment_15\" style=\"width: 300px\" class=\"wp-caption alignright\"><a><img class=\" td-modal-image wp-image-15\" src=\"http://demo.gikapp.com/wp-content/uploads/2017/08/p2.jpg\" width=\"300\" height=\"442\" /></a><figcaption class=\"wp-caption-text\">Fun day at the beach</figcaption></figure>\n<p>I began to ask myself, why &#8211; when I put whatever on my skin, which is the body&#8217;s largest organ, sometimes not really buying the ingredient story and not caring at all.</p>\n<p>I&#8217;ve been in this industry forever and I know topical products can only do so much for your hair and skin.</p>\n<p>Nice packaging and product feel can really make you feel good and that&#8217;s part of the joy of this.</p>\n<p>In addition to loving beauty and taking care of myself, I also love opening people minds to other paths of self-care, and good marketing and I can honestly say that I use and personally love this product but I&#8217;m not sure for which reason.</p>\n<blockquote><p>I think it made me think about it more and really consider why I was choosing to add this to my routine</p></blockquote>\n<p>It poses an interesting question for me on the wellness category &#8211; will people be willing to buy in, or does eating something change your &#8220;sniff&#8221; test on the believe-ability of the claims?</p>\n<p>The color is very long lasting and they have an interesting texture that&#8217;s like a powder and a cream but neither really. They&#8217;re made with pure pigments and oils and will never melt with the warmth of your skin because they don&#8217;t contain any waxes. You can literally use them for anything &#8211; obviously as eye shadow and liner, but the light shade is a great highlighter, and the red can be used for lip or blush with a little balm.</p>\n<figure id=\"attachment_16\" style=\"width: 1068px\" class=\"wp-caption alignleft\"><a><img class=\" td-modal-image wp-image-16 size-full\" src=\"http://demo.gikapp.com/wp-content/uploads/2017/08/p3.jpg\" width=\"1068\" height=\"712\" srcset=\"https://demo.gikapp.com/wp-content/uploads/2017/08/p3.jpg 1068w, https://demo.gikapp.com/wp-content/uploads/2017/08/p3-300x200.jpg 300w, https://demo.gikapp.com/wp-content/uploads/2017/08/p3-768x512.jpg 768w, https://demo.gikapp.com/wp-content/uploads/2017/08/p3-700x467.jpg 700w, https://demo.gikapp.com/wp-content/uploads/2017/08/p3-696x464.jpg 696w, https://demo.gikapp.com/wp-content/uploads/2017/08/p3-630x420.jpg 630w\" sizes=\"(max-width: 1068px) 100vw, 1068px\" /></a><figcaption class=\"wp-caption-text\">Healthy breakfast and beautiful flowers</figcaption></figure>\n<p>Most perfumers utilize aroma molecules, basically breaking down the chemical structure of natural odors into building blocks which are generally more olfactively pure and controllable than essential oil.</p>\n<p>Molecule 01 pays homage to Iso E Super, which is a sandalwood/cedar smell &#8211; but the trick is that this is all that&#8217;s in there. The scent doesn&#8217;t evolve quite like a normal fragrance, in fact it&#8217;s hard to even smell it all sometimes. My husband described it as smelling like a high school art room (i.e. pencil shavings). But once you have it on your body, it becomes the sexiest thing &#8211; very personal and close, very mysterious.</p>\n<p>If you love Le Labo Rose 31, to me it&#8217;s a little bit like the whisper version of that (which for me is way too big of a fragrance for everyday).</p>\n<blockquote><p>Trust me that your man will steal this &#8211; or, you can get it for him for Valentine&#8217;s Day and steal it yourself</p></blockquote>\n<p>Honey, like coconut oil, is one of those ingredients that (they say) has a cure for just about everything. That is why DIY-ing face masks with a simple combo of Greek yogurt + honey or honey alone is not a crazy thing to do.</p>\n<figure id=\"attachment_17\" style=\"width: 300px\" class=\"wp-caption alignleft\"><a><img class=\" td-modal-image wp-image-17\" src=\"http://demo.gikapp.com/wp-content/uploads/2017/08/p4.jpg\" width=\"300\" height=\"450\" srcset=\"https://demo.gikapp.com/wp-content/uploads/2017/08/p4.jpg 712w, https://demo.gikapp.com/wp-content/uploads/2017/08/p4-200x300.jpg 200w, https://demo.gikapp.com/wp-content/uploads/2017/08/p4-700x1050.jpg 700w, https://demo.gikapp.com/wp-content/uploads/2017/08/p4-696x1044.jpg 696w, https://demo.gikapp.com/wp-content/uploads/2017/08/p4-280x420.jpg 280w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a><figcaption class=\"wp-caption-text\">Feel the wonderful sea breeze</figcaption></figure>\n<p>Maybe your partner doesn&#8217;t have a beard and you are thinking, well great, thanks for the advice, but no beard on my shopping list have no fear, we have one more great must give man gift idea.</p>\n<p>Wild Rose, which is an Oregon-grown company, prides itself on sustainability and offers up the simple yet brilliant Wild Man After Shave. His face will feel healed and refreshed and he&#8217;ll have a subtle woodsy scent like you just strolled with him through a fair glen.</p>\n<p>There&#8217;s also a little pouch to store the rollerballs, and a card with different inspirations as to how to blend them on your skin &#8211; but it&#8217;s foolproof. You can&#8217;t make a mess if you mix them all up.</p>\n<p>Badger Beard Balm is perfect for the bearded gents in your life (is this everyone? beards are so trending). It is filled with good things such as vitamins A, D, E &amp; F to keep his beard healthy, thicker and cleaner, as well as helping to relieve itchiness as it soothes the skin under the hair.</p>\n<blockquote><p>If you&#8217;re looking to get rid of this beard, maybe this is not the right angle for your gifting</p></blockquote>\n<p>Further, no one wants to cuddle with a dirty beard &#8211; who knows, maybe you already are and are dying for a nice way to help this problem of yours his. Beard Wash made by Beard Buddy. Started in 2011 in California, all Beard Buddy products are hand crafted by beards for beards. Both founders have large beards of their own to tame, and wanted to do this with organic products &#8211; kudos, and cuddles, to them.</p>\n"

var {height, width} = Dimensions.get('window');
export default class ArticleDetailStaticScreen extends Component {
  static navigatorStyle = {
      tabBarHidden: true
    };

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
            source={{html: html }}
            style={{
                width: width,
                marginTop: 0,
                backgroundColor: '#ffffff',
                height: 200,
            }}
            scalesPageToFit={Platform.OS == 'ios' ? false : true}
            javaScriptEnabledAndroid={true}
            javaScriptEnabled={true}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({

});
