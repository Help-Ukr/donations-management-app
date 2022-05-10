/// <reference path="./api.override.d.ts" />
namespace API {

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api-v1/login": {
    /** Login by email, password */
    post: operations["authLogin"];
  };
  "/api-v1/logout": {
    /** Logout user current token */
    get: operations["authLogout"];
  };
  "/api-v1/collect-point": {
    get: operations["getCollectionPoint"];
    post: operations["createCollectionPoint"];
    patch: operations["updateCollectionPoint"];
  };
  "/api-v1/collect-point/my": {
    get: operations["getCollectionPointsMy"];
  };
  "/api-v1/collect-point/photo": {
    post: operations["storeCollectionPointPhoto"];
  };
  "/api-v1/item-category": {
    get: operations["getItemCategories"];
  };
}

export interface components {
  schemas: {
    CollectPoint: {
      /**
       * Id
       * @example 1
       */
      id: number;
      /**
       * Is enabled current collect point
       * @example true
       */
      enabled: boolean;
      /**
       * Collect point name
       * @example Space Meduza
       */
      name: string;
      /**
       * Collect point description (max:512)
       * @example Volunteers uniting to bring aid, donations & transport to Refugees and people in need. Sends convoys to the border regularly
       */
      description?: string;
      /**
       * Collect point contact phone number
       * @example +491767890123
       */
      phone: string;
      /**
       * Collect point telegram account
       * @example @jax21ukr
       */
      telegram?: string;
      /**
       * Collect point instagram account
       * @example @insta
       */
      instagram?: string;
      /**
       * Collect point logo image
       * @example https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png
       */
      image?: string;
      location: {
        /** @example Skalitzer Straße 80, 10990 Berlin */
        address: string;
        /**
         * Format: double
         * @example 59.334591
         */
        latitude: number;
        /**
         * Format: double
         * @example 18.06324
         */
        longitude: number;
      };
      needed_items: {
        /** @example 2 */
        item_category_id: number;
        /** @example University */
        item_category_name: string;
        /** @example 🔦 */
        item_category_icon: string;
      }[];
      /**
       * Format: date-time
       * @example 2022-03-09T10:01:17.000000Z
       */
      updated_at: string;
      /**
       * Format: date-time
       * @example 2022-03-09T10:01:17.000000Z
       */
      created_at: string;
    };
    ItemCategory: {
      /**
       * Id
       * @example 1
       */
      id: number;
      /**
       * Parent Id
       * @example 1
       */
      parent_id: number;
      /**
       * Username
       * @example food
       */
      name: string;
      /**
       * icon
       * @example 🔦
       */
      icon: string;
    };
  };
}

export interface operations {
  /** Login by email, password */
  authLogin: {
    responses: {
      /** Successful logged in */
      200: {
        content: {
          "application/json": {
            /** @example 1|FXCTLI72DhcrOPSuNt8M9BYmtGz91ziNlJECINpW */
            token?: string;
          };
        };
      };
      /** Wrong credentials response */
      401: {
        content: {
          "application/json": {
            /** @example Credentials not match */
            message?: string;
          };
        };
      };
      /** Unprocessable Content */
      422: {
        content: {
          "application/json": {
            /** @example The email field is required. */
            message?: string;
          };
        };
      };
      /** Too Many Requests */
      429: unknown;
    };
    /** Pass user credentials */
    requestBody: {
      content: {
        "application/json": {
          /** @example ya29.A0ARrdaM-Oj2yWacijuQ5L3dH6tJcIkpjjZ4XRC18J82zAZjmOCHsYh9ExipfVLXt-p4iRvjaBTsCPm-Y5RE2F-ztkqec08juCUktRdRl6D9dWg9CB7kJl8GrhvGMZaIOICZdNJwtHjoXSW6IivTSF5AW53TT3 */
          token: string;
          /** @example google */
          name: string;
        };
      };
    };
  };
  /** Logout user current token */
  authLogout: {
    responses: {
      /** User token removed successful */
      204: never;
      /** Too Many Requests */
      429: unknown;
    };
  };
  getCollectionPoint: {
    parameters: {
      query: {
        /** Filter collect points by coordinate pair 1 - is the upper left corner, coordinate pair 2 - is the lower right corner */
        bbox?: unknown;
      };
    };
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["CollectPoint"][];
        };
      };
      /** Too Many Requests */
      429: unknown;
    };
  };
  createCollectionPoint: {
    responses: {
      /** Successful operation */
      201: {
        content: {
          "application/json": components["schemas"]["CollectPoint"];
        };
      };
      /** Unauthenticated */
      401: unknown;
      /** Unprocessable Entity */
      422: unknown;
      /** Too Many Requests */
      429: unknown;
    };
    /** Input data format */
    requestBody: {
      content: {
        "application/json": {
          /** @example true */
          enabled?: boolean;
          /** @example Space Meduza */
          name: string;
          /** @example Volunteers uniting to bring aid, donations & transport to Refugees and people in need. Sends convoys to the border regularly */
          description?: string;
          /**
           * Collect point contact phone number
           * @example +491767890123
           */
          phone?: string;
          /**
           * Collect point telegram account
           * @example @jax21ukr
           */
          telegram?: string;
          /**
           * Collect point instagram account
           * @example @insta
           */
          instagram?: string;
          /**
           * Collect point logo image
           * @example https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png
           */
          image?: string;
          needed_items?: {
            /** @example 2 */
            item_category_id: number;
          }[];
          location: {
            /** @example Skalitzer Straße 80, 10990 Berlin */
            address: string;
            /**
             * Format: double
             * @example 59.334591
             */
            latitude: number;
            /**
             * Format: double
             * @example 18.06324
             */
            longitude: number;
          };
        };
      };
    };
  };
  updateCollectionPoint: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["CollectPoint"];
        };
      };
      /** Unauthenticated */
      401: unknown;
      /** Too Many Requests */
      429: unknown;
    };
    /** Input data format */
    requestBody: {
      content: {
        "application/json": {
          /** @example true */
          enabled?: boolean;
          /** @example new name */
          name: string;
          /** @example description updated: Volunteers uniting to bring aid, donations & transport to Refugees and people in need. Sends convoys to the border regularly */
          description?: string;
          /**
           * Collect point contact phone number
           * @example +491767890123
           */
          phone?: string;
          /**
           * Collect point telegram account
           * @example @jax21ukr
           */
          telegram?: string;
          /**
           * Collect point instagram account
           * @example @insta
           */
          instagram?: string;
          /**
           * Collect point logo image
           * @example https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png
           */
          image?: string;
          location: {
            /** @example new address */
            address: string;
            /**
             * Format: double
             * @example 9.9999
             */
            latitude: number;
            /**
             * Format: double
             * @example 8.8888
             */
            longitude: number;
          };
          needed_items?: {
            /** @example 2 */
            item_category_id: number;
          }[];
        };
      };
    };
  };
  getCollectionPointsMy: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["CollectPoint"];
        };
      };
      /** No data found */
      204: never;
      /** Unauthenticated */
      401: unknown;
      /** Too Many Requests */
      429: unknown;
    };
  };
  storeCollectionPointPhoto: {
    responses: {
      /** Successful operation */
      200: unknown;
      /** Unauthenticated */
      401: unknown;
      /** Unprocessable Entity */
      422: unknown;
      /** Too Many Requests */
      429: unknown;
    };
    requestBody: {
      content: {
        "multipart/form-data": {
          /**
           * Format: binary
           * @description collect point photo to upload. Max size 2M.
           */
          photo: string;
        };
      };
    };
  };
  getItemCategories: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["ItemCategory"][];
        };
      };
      /** Unauthenticated */
      401: unknown;
      /** Too Many Requests */
      429: unknown;
    };
  };
}

export interface external {}
}

