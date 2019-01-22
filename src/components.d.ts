/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  IArticle,
} from './api/articles';
import {
  IAPIErrors,
} from './api/utils';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  IUser,
  TSignOut,
} from './api/auth';
import {
  TTabTypes,
} from './components/types';
import {
  IProfile,
} from './api/profiles';
import {
  IComment,
} from './api/comments';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface ArticleList {
    'articles': IArticle[];
    'errors': IAPIErrors;
  }
  interface ArticleListAttributes extends StencilHTMLAttributes {
    'articles'?: IArticle[];
    'errors'?: IAPIErrors;
  }

  interface ArticleMeta {
    'article': IArticle;
    'followFavorite': (isFollow: boolean) => void;
    'history': RouterHistory;
    'user'?: IUser;
  }
  interface ArticleMetaAttributes extends StencilHTMLAttributes {
    'article'?: IArticle;
    'followFavorite'?: (isFollow: boolean) => void;
    'history'?: RouterHistory;
    'user'?: IUser;
  }

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppHeader {
    'signOut': TSignOut;
    'user'?: IUser;
  }
  interface AppHeaderAttributes extends StencilHTMLAttributes {
    'signOut'?: TSignOut;
    'user'?: IUser;
  }

  interface LoadingSpinner {}
  interface LoadingSpinnerAttributes extends StencilHTMLAttributes {}

  interface NotFound {
    'history': RouterHistory;
  }
  interface NotFoundAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface TabbedFeed {
    'activeTag'?: string;
    'clearTag'?: () => void;
    'isProfile'?: boolean;
    'possibleTabs': Array<TTabTypes>;
    'profile'?: IProfile;
    'user'?: IUser;
  }
  interface TabbedFeedAttributes extends StencilHTMLAttributes {
    'activeTag'?: string;
    'clearTag'?: () => void;
    'isProfile'?: boolean;
    'possibleTabs'?: Array<TTabTypes>;
    'profile'?: IProfile;
    'user'?: IUser;
  }

  interface ArticlePage {
    'history': RouterHistory;
    'match': MatchResults;
    'user'?: IUser;
  }
  interface ArticlePageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'user'?: IUser;
  }

  interface CommentForm {
    'addComment': (comment: IComment) => void;
    'slug': string;
    'user': IUser;
  }
  interface CommentFormAttributes extends StencilHTMLAttributes {
    'addComment'?: (comment: IComment) => void;
    'slug'?: string;
    'user'?: IUser;
  }

  interface SingleComment {
    'comment': IComment;
    'removeComment': (id: number) => void;
    'slug': string;
    'user': IUser;
  }
  interface SingleCommentAttributes extends StencilHTMLAttributes {
    'comment'?: IComment;
    'removeComment'?: (id: number) => void;
    'slug'?: string;
    'user'?: IUser;
  }

  interface AuthPage {
    'match': MatchResults;
    'setUser': (user: IUser) => void;
  }
  interface AuthPageAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
    'setUser'?: (user: IUser) => void;
  }

  interface EditorPage {
    'history': RouterHistory;
    'match': MatchResults;
    'user': IUser;
  }
  interface EditorPageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'user'?: IUser;
  }

  interface HomePage {
    'user'?: IUser;
  }
  interface HomePageAttributes extends StencilHTMLAttributes {
    'user'?: IUser;
  }

  interface HomeTags {
    'setTag': (tag: string) => void;
  }
  interface HomeTagsAttributes extends StencilHTMLAttributes {
    'setTag'?: (tag: string) => void;
  }

  interface ProfilePage {
    'match': MatchResults;
    'user'?: IUser;
  }
  interface ProfilePageAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
    'user'?: IUser;
  }

  interface SettingsPage {
    'setUser': (user: IUser) => void;
    'user': IUser;
  }
  interface SettingsPageAttributes extends StencilHTMLAttributes {
    'setUser'?: (user: IUser) => void;
    'user'?: IUser;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'ArticleList': Components.ArticleList;
    'ArticleMeta': Components.ArticleMeta;
    'AppFooter': Components.AppFooter;
    'AppHeader': Components.AppHeader;
    'LoadingSpinner': Components.LoadingSpinner;
    'NotFound': Components.NotFound;
    'TabbedFeed': Components.TabbedFeed;
    'ArticlePage': Components.ArticlePage;
    'CommentForm': Components.CommentForm;
    'SingleComment': Components.SingleComment;
    'AuthPage': Components.AuthPage;
    'EditorPage': Components.EditorPage;
    'HomePage': Components.HomePage;
    'HomeTags': Components.HomeTags;
    'ProfilePage': Components.ProfilePage;
    'SettingsPage': Components.SettingsPage;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'article-list': Components.ArticleListAttributes;
    'article-meta': Components.ArticleMetaAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-header': Components.AppHeaderAttributes;
    'loading-spinner': Components.LoadingSpinnerAttributes;
    'not-found': Components.NotFoundAttributes;
    'tabbed-feed': Components.TabbedFeedAttributes;
    'article-page': Components.ArticlePageAttributes;
    'comment-form': Components.CommentFormAttributes;
    'single-comment': Components.SingleCommentAttributes;
    'auth-page': Components.AuthPageAttributes;
    'editor-page': Components.EditorPageAttributes;
    'home-page': Components.HomePageAttributes;
    'home-tags': Components.HomeTagsAttributes;
    'profile-page': Components.ProfilePageAttributes;
    'settings-page': Components.SettingsPageAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLArticleListElement extends Components.ArticleList, HTMLStencilElement {}
  var HTMLArticleListElement: {
    prototype: HTMLArticleListElement;
    new (): HTMLArticleListElement;
  };

  interface HTMLArticleMetaElement extends Components.ArticleMeta, HTMLStencilElement {}
  var HTMLArticleMetaElement: {
    prototype: HTMLArticleMetaElement;
    new (): HTMLArticleMetaElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLLoadingSpinnerElement extends Components.LoadingSpinner, HTMLStencilElement {}
  var HTMLLoadingSpinnerElement: {
    prototype: HTMLLoadingSpinnerElement;
    new (): HTMLLoadingSpinnerElement;
  };

  interface HTMLNotFoundElement extends Components.NotFound, HTMLStencilElement {}
  var HTMLNotFoundElement: {
    prototype: HTMLNotFoundElement;
    new (): HTMLNotFoundElement;
  };

  interface HTMLTabbedFeedElement extends Components.TabbedFeed, HTMLStencilElement {}
  var HTMLTabbedFeedElement: {
    prototype: HTMLTabbedFeedElement;
    new (): HTMLTabbedFeedElement;
  };

  interface HTMLArticlePageElement extends Components.ArticlePage, HTMLStencilElement {}
  var HTMLArticlePageElement: {
    prototype: HTMLArticlePageElement;
    new (): HTMLArticlePageElement;
  };

  interface HTMLCommentFormElement extends Components.CommentForm, HTMLStencilElement {}
  var HTMLCommentFormElement: {
    prototype: HTMLCommentFormElement;
    new (): HTMLCommentFormElement;
  };

  interface HTMLSingleCommentElement extends Components.SingleComment, HTMLStencilElement {}
  var HTMLSingleCommentElement: {
    prototype: HTMLSingleCommentElement;
    new (): HTMLSingleCommentElement;
  };

  interface HTMLAuthPageElement extends Components.AuthPage, HTMLStencilElement {}
  var HTMLAuthPageElement: {
    prototype: HTMLAuthPageElement;
    new (): HTMLAuthPageElement;
  };

  interface HTMLEditorPageElement extends Components.EditorPage, HTMLStencilElement {}
  var HTMLEditorPageElement: {
    prototype: HTMLEditorPageElement;
    new (): HTMLEditorPageElement;
  };

  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLHomeTagsElement extends Components.HomeTags, HTMLStencilElement {}
  var HTMLHomeTagsElement: {
    prototype: HTMLHomeTagsElement;
    new (): HTMLHomeTagsElement;
  };

  interface HTMLProfilePageElement extends Components.ProfilePage, HTMLStencilElement {}
  var HTMLProfilePageElement: {
    prototype: HTMLProfilePageElement;
    new (): HTMLProfilePageElement;
  };

  interface HTMLSettingsPageElement extends Components.SettingsPage, HTMLStencilElement {}
  var HTMLSettingsPageElement: {
    prototype: HTMLSettingsPageElement;
    new (): HTMLSettingsPageElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'article-list': HTMLArticleListElement
    'article-meta': HTMLArticleMetaElement
    'app-footer': HTMLAppFooterElement
    'app-header': HTMLAppHeaderElement
    'loading-spinner': HTMLLoadingSpinnerElement
    'not-found': HTMLNotFoundElement
    'tabbed-feed': HTMLTabbedFeedElement
    'article-page': HTMLArticlePageElement
    'comment-form': HTMLCommentFormElement
    'single-comment': HTMLSingleCommentElement
    'auth-page': HTMLAuthPageElement
    'editor-page': HTMLEditorPageElement
    'home-page': HTMLHomePageElement
    'home-tags': HTMLHomeTagsElement
    'profile-page': HTMLProfilePageElement
    'settings-page': HTMLSettingsPageElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'article-list': HTMLArticleListElement;
    'article-meta': HTMLArticleMetaElement;
    'app-footer': HTMLAppFooterElement;
    'app-header': HTMLAppHeaderElement;
    'loading-spinner': HTMLLoadingSpinnerElement;
    'not-found': HTMLNotFoundElement;
    'tabbed-feed': HTMLTabbedFeedElement;
    'article-page': HTMLArticlePageElement;
    'comment-form': HTMLCommentFormElement;
    'single-comment': HTMLSingleCommentElement;
    'auth-page': HTMLAuthPageElement;
    'editor-page': HTMLEditorPageElement;
    'home-page': HTMLHomePageElement;
    'home-tags': HTMLHomeTagsElement;
    'profile-page': HTMLProfilePageElement;
    'settings-page': HTMLSettingsPageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
