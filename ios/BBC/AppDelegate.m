#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
// **********************************************
// *** DON'T MISS: THE NEXT LINE IS IMPORTANT ***
// **********************************************
#import "RCCManager.h"

// IMPORTANT: if you're getting an Xcode error that RCCManager.h isn't found, you've probably ran "npm install"
// with npm ver 2. You'll need to "npm install" with npm 3 (see https://github.com/wix/react-native-navigation/issues/1)

#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
  // jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.15:8081/index.bundle?platform=ios&dev=true"];
  //jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];



  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedIntance] initBridgeWithBundleURL: jsCodeLocation];

  return YES;
}

@end
